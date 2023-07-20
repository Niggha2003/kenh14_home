function Grid({ children, ...props }) {
    return (
        <div style={{ width: '1040px', margin: 'auto' }} {...props}>
            {children}
        </div>
    );
}

export default Grid;
