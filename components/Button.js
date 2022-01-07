
export default function Button({buttonname}) {
    
    return (
        <button>
            <para>{buttonname}</para>
            
        </button>
    )
}

Button.defaultProps = {
    buttonname: 'Main Hoon Default'
};