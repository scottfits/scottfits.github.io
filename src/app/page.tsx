import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">About me</h2>
      
      <div className="space-y-4 text-lg">
        <p>
          I am the co-founder and CTO at <a href="https://airgarage.com" target="_blank" rel="noopener noreferrer">AirGarage</a>, 
          where we&apos;re bringing technology like license plate reading cameras and AI to the old school parking industry.
        </p>
        
        <p>
          I started my journey in tech by building iPhone apps to help people learn to read music. 
          I then founded AirGarage out of a personal pain point of trying to find parking on campus.
        </p>
        
        <p>
                  For fun, I enjoy listening to podcasts like Planet Money, reading business biographies, and investing in startups. I also 
            wrote a <a target="_blank" rel="noopener noreferrer" href="https://www.svmusical.com/"> musical about Silicon Valley</a>.
        </p>
      </div>
      
    </div>
  )
}
