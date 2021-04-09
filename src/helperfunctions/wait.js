const wait = (ms) => {
    return new Promise(a=>setTimeout(a,ms));
}

export default wait;