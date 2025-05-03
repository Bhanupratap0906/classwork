import { useEffect, useState } from 'react';

function FooterClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = time.toLocaleDateString('en-US', options);
  const formattedTime = time.toLocaleTimeString('en-US');

  return (
    <footer style={{ textAlign: 'center', marginTop: '2rem', fontWeight: 'bold' }}>
      {formattedTime} {formattedDate}
    </footer>
  );
}

export default FooterClock;
