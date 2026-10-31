
function Fruits() {
    let Fruites = [
        { name: "apple", price: 100 },
        { name: "orange", price: 70 },
        { name: "papaya", price: 200 },
        { name: "green apple", price: 150 }
    ];

    return (
        <div>
            <h1>Fruits List</h1>
            <ol>
                {Fruites.map((fruit, index) => (
                    <li>
                        {fruit.name} - ₹{fruit.price}
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Fruits;
