function Grid({ width = '1040px', margin = 'auto', children, ...props }) {
    return (
        <div style={{ width, margin }} {...props}>
            {children}
        </div>
    );
}

export default Grid;
