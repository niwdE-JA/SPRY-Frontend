const io5 = require('react-icons/io5');

const Ionicons = ({ name, className})=>{
    let Icon = io5[name];

    return(
        <>
        < Icon className = {className} />
        </>
    );
}

export default Ionicons;