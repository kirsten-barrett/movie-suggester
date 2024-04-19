export default function ChooseTime() {
    const pTime = 'Do you care when it came out?';
  
    return (
        <>
          <h2>{pTime}</h2>

          <ul className="timeOptions">
            <input type="checkbox" id="50s" value="50s" />
            <label for="50s">50s & Before</label>

            <input type="checkbox" id="60s" value="60s" />
            <label for="60s">60s</label>

            <input type="checkbox" id="70s" value="70s" />
            <label for="70s">70s</label>
  
            <input type="checkbox" id="80s" value="80s" />
            <label for="80s">80s</label>
  
            <input type="checkbox" id="90s" value="90s" />
            <label for="90s">90s</label>
  
            <input type="checkbox" id="2000s" value="2000s" />
            <label for="2000s">2000s</label>
  
            <input type="checkbox" id="2010s" value="2010s" />
            <label for="2010s">2010s</label>
  
            <input type="checkbox" id="2020s" value="2020s" />
            <label for="2020s">2020s</label>
          </ul>

          <button>Start Over</button>
        </>
    )
  }