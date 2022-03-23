function empty(input, error) {
    $data = document.querySelector(input);
    $msg = document.querySelector(error);
    if ($data.value) {
       return $msg.innerHTML = "";
    } else {
        return $msg.innerHTML = "Dato obligatorio.";
    }
}

console.log(empty('#name', '#nameErrors'));