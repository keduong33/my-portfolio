function Experiences() {
  return (
    <div id="experiences">
      <div className="prose">
        <h2>Experiences</h2>
      </div>
      <ul className="timeline timeline-snap-icon timeline-vertical max-md:timeline-compact">
        <li>
          <div className="pb-10 timeline-start md:text-end">
            <time className="font-mono italic">May 2023 - current</time>
            <div>
              Software Developer at{" "}
              <a
                className="text-lg font-black link link-hover"
                href="https://www.hungryhungry.com/who"
              >
                HungryHungry
              </a>
              <br />
              <b>Highlight</b>: Developed the UI of{" "}
              <a
                className="link"
                href="https://www.hungryhungry.com/hungrypay"
                target="_blank"
              >
                HungryPay
              </a>
              . A simple but unique solution designed to take away the pain of
              splitting the bill from staff and guests after their meals.
            </div>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
}

export default Experiences;
