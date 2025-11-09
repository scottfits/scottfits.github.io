export default function Questions() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Questions I&apos;m Thinking About</h2>
      
      <div className="space-y-8">
              <div>
                  <h3 className="text-xl font-semibold mb-3">
                      Can AI run a company?
                  </h3>
                  <p className="text-lg text-gray-700">
                    Agents like Devin and Copilot are rapidly getting better at coding. 
                    Imagining an org chart, these appear to be the leaf nodes - i.e. the ICs who are doing very 
                    self-contained time-boxed work. But soon, these agents will be able to handle more complex, long-horizon tasks.
                    Next up, I imagine AI agents will work as product managers, and maybe even be the CEO.
                    Doing the job of a CEO is the final boss - it requires excellent judgement and decision-making.
                  </p>
              </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">
            What is the economic potential locked up by restrictive zoning?
          </h3>
          <p className="text-lg text-gray-700">
            A handful of local governments in the Bay Area, New York, and other tech hubs have an 
            inordinate amount of power over the modern economy, like deciding how much housing can 
            get built. Restrictive zoning laws keep rents high, encourage sprawl, and make it harder 
            for knowledge to cluster by applying pressure that pushes ambitious people elsewhere. 
            Our cities are the engines of economic productivity yet their potential is often dictated 
            by local politics, something many people in technology aren&apos;t paying enough attention to.
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3">
            How do you create effective institutions?
          </h3>
          <p className="text-lg text-gray-700">
            In 2021 I started a DAO that pooled $5m to buy land using a new law in state of Wyoming 
            that made it possible. As a decentralized organization, everything is decided through a 
            vote of the members. Compared to my company, each action needed much more deliberating 
            and buy-in. While it&apos;s indeed a more democratic institution, it also moves slower as 
            a result.
          </p>
          <p className="text-lg text-gray-700 mt-3">
            Startups, which need to move fast, are more akin to dictatorships (hopefully benevolent ones). 
            This allows them to make a lot of tiny decisions fast instead of having the team vote on 
            every new feature or design choice. Benevolent dictatorships can be effective and fast 
            while they are benevolent, but since they concentrate resources and power, they make it 
            tempting for infighting over control and are volatile in periods of regime change.
          </p>
          <p className="text-lg text-gray-700 mt-3">
            Starting the DAO was a study in incentive design and institutions - and made me fascinated 
            by how to build institutions that are effective, enduring, and compassionate.
          </p>
        </div>
      </div>
    </div>
  )
}
