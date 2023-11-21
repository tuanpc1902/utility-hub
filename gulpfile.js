const
    gulp = require('gulp'),
    del = require('del'),
    merge = require('gulp-merge-json'),
    fs = require('fs'),
    path = require('path'),
    concat = require('gulp-concat'),
    _ = require('lodash');

const pathSrc = {
    locales: 'src/locales',
};

const pathDest = {
    build: 'build/',
    locales: 'public/locales/',
};

const pathWatch = {
    locales: 'src/locales/**/*',
};

function getFolders(dir) {
    return fs.readdirSync(dir)
        .filter(file => {
            return fs.statSync(path.join(dir, file)).isDirectory();
        });
}

function prepareFormatContentJson(file, subFolderPath, json) {
    const fileName = path.basename(file.path);
    const fileNameStrip = fileName.replace(path.extname(fileName), '');

    if (process.platform === 'win32') {
        subFolderPath = subFolderPath.replace(/\//g, '\\');
    }

    const subPathJson = file.path.split(subFolderPath)[1];
    const splitKey = process.platform === 'win32' ? '\\' : '/';
    const folders = subPathJson.split(splitKey);
    let jsonStr = '';
    _.forEach(folders, folder => {
        if (!_.isEmpty(folder)) {
            if (folder.indexOf('.json') !== -1) {
                if (folder.indexOf('default') === -1) {
                    jsonStr += '{' + '"' + fileNameStrip + '": ';
                }
                jsonStr += JSON.stringify(json);
            } else {
                jsonStr += '{' + '"' + folder + '": ';
            }
        }
    });

    _.forEach(folders, folder => {
        if (!_.isEmpty(folder) && folder.indexOf('default') === -1) {
            jsonStr += '}';
        }
    });
    return JSON.parse(jsonStr);
}

function swallowError(error) {
    console.log(error);
    this.emit('end');
}

gulp.task('delBuild', () => {
    return del([pathDest.build]);
});

gulp.task('delLocales', () => {
    return del([pathDest.locales]);
});

gulp.task('mergeJsonLocales', (done) => {
    const folders = getFolders(pathSrc.locales);
    folders.map((folder) => {
        gulp.src(pathSrc.locales + '/' + folder + '/*.json')
            .pipe(gulp.dest(pathDest.locales + folder));
        const subFolders = getFolders(pathSrc.locales + '/' + folder);
        subFolders.map((subFolder) => {
            const subFolderPath = (pathSrc.locales + '/' + folder + '/' + subFolder);
            const pathJsonFile = path.join(subFolderPath, '/*.json');

            gulp.src(pathJsonFile)
                .pipe(merge({
                    fileName: subFolder + '.json',
                    edit: (json, file) => {
                        let subFolderPath = (pathSrc.locales + '/' + folder + '/' + subFolder);
                        return prepareFormatContentJson(file, subFolderPath, json);
                    },
                }))
                .on('error', swallowError)
                .pipe(concat(subFolder + '.json'))
                .pipe(gulp.dest(pathDest.locales + '/' + folder));

        });
    });
    done();
});

gulp.task('watchJson', () => {
    gulp.watch([pathWatch.locales], gulp.series('mergeJsonLocales'));
});

gulp.task('build', gulp.series('delBuild', 'delLocales', 'mergeJsonLocales'));

gulp.task('default', gulp.series('build'));






















