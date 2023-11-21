interface HeaderOnlyProps {
    children: JSX.Element;
}

function HeaderOnly(props: HeaderOnlyProps) {
    return (
        <div>
            <div className='container'>
                <div className='content'>{props.children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
