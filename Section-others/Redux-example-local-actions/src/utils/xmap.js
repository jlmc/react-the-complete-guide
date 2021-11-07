
const names = ["Arthur", "Bruno", "Charles"]
const namesWithIndex =
names.map((name, index) => {
    let message = `${name} - ${index}`;
    console.log(message)
    return message
})
