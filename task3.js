let available;

let ordered;

function checkOrder(available, ordered) {
    if (available < ordered) {
        console.log("Your order is too large, we don’t have enough goods.");
    } else if (ordered === 0) {
        console.log("Your order is empty");
    } else if (available >= ordered) {
        console.log("Your order is accepted");
    }
}



checkOrder(2,0);