function webrequest() {
    if (prompt('WHATS THE PASSWORD') == "2016") {
        window.location.href = "web.html"
    }
    else {
        alert('WRONG PASSWORD')
    }
}