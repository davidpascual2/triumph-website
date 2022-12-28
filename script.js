//test
// const submitRequest = document.querySelector('#submit-request')

const addRequestHandler = async (event) => {
    event.preventDefault();
    console.log('clicked!')

    const memberName = document.querySelector("#memberName").value.trim();
    const requestDetails = document.querySelector("#requestDetails").value.trim();



document.querySelector("#add-request-form").addEventListener('submit', addRequestHandler);
}