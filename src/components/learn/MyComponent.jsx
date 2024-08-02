
import "./style.css"

const MyComponent = () => {
    // const name = 'dang'; //string
    const name = [1,2,3,4]
    // const name = {
    //     age: 12,
    //     address: '12 NTT'
    // }

    return (
        <>
        <div className="hoidanit">
            {JSON.stringify(name)} & hoi dan it update
        </div>
        <div style={
            {
            borderRadius: "10px"
        }}>child</div>
        </>
        

    );
};

export default MyComponent;