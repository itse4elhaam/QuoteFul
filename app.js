// Fetching DOM:
let quoteBox = document.querySelector(".TheQuote");
let AdviceCount = document.querySelector(".AdviceCount");
let QuoteChanger = document.querySelector(".dicebtn");
console.log(QuoteChanger);

// Fetching data from API:
const apiUrl = "https://api.adviceslip.com/advice";
const GetAdvice = async (url) => {
    try {
        const res = await fetch(url);
        let data = await res.json();
        let Slip = data.slip;
        console.log(Slip);
        let advice = data.slip.advice;
        let id = data.slip.id;
        console.log(`Count No: ${id} ${advice}`);
        return Slip;
    } catch (err) {
        alert(`Sorry for inconvinience,${err}`)
    }
}

// Changing Quotes on Demand and refresh:
window.onload = async() => {
    let Obj = await GetAdvice(apiUrl);
    quoteBox.textContent = '';
    let QuoteInQuotes = document.createElement('q');
    QuoteInQuotes.classList.add('QuoteInQuotes');
    quoteBox.append(QuoteInQuotes);
    QuoteInQuotes.textContent = Obj.advice;
    AdviceCount.textContent = Obj.id;
};

QuoteChanger.addEventListener('click', async() => {
    quoteBox.textContent = "loading...";
    let Obj = await GetAdvice(apiUrl);
    quoteBox.textContent = "";
    let QuoteInQuotes = document.querySelector('.QuoteInQuotes')
    // making the <q> in case it doesn't exist already
    if (QuoteInQuotes == null) {
        QuoteInQuotes = document.createElement('q');
        QuoteInQuotes.classList.add('QuoteInQuotes');
        quoteBox.append(QuoteInQuotes);
    }
    QuoteInQuotes.textContent = Obj.advice;
    AdviceCount.textContent = Obj.id;
})





