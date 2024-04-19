export default function ChooseRating() {
    const pRating = 'Do you care what people tend to say about it?';
    
    return (
      <>
        <h2>{pRating}</h2>

        <ul className="ratingOptions">
            <input type="checkbox" id="one" value="one" />
            <label for="one">1 Star</label>
  
            <input type="checkbox" id="two" value="two" />
            <label for="two">2 Star</label>
  
            <input type="checkbox" id="three" value="three" />
            <label for="three">3 Star</label>
  
            <input type="checkbox" id="four" value="four" />
            <label for="four">4 Star</label>
  
            <input type="checkbox" id="five" value="five" />
            <label for="five">5 Star</label>
        </ul>

        <button>Start Over</button>
      </>
    )
  }