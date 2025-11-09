export default function Investing() {
  const companies = [
    {
      name: "Slope Tech",
      description: "Modern B2B payments and order-to-cash automation",
      url: "https://www.slope.so/"
    },
    {
      name: "Anthropic",
      description: "AI safety and research company building Claude",
      url: "https://www.anthropic.com/"
    },
    {
      name: "Doola",
      description: "Formation and compliance for global entrepreneurs",
      url: "https://www.doola.com/"
    },
    {
      name: "Hex",
      description: "Collaborative data science and analytics platform",
      url: "https://hex.tech/"
    },
    {
      name: "Momentic",
      description: "AI-powered software testing automation",
      url: "https://www.momentic.ai/"
    },
    {
      name: "Pareto",
      description: "Data labeling for AI labs",
      url: "https://www.pareto.ai/"
    }
  ]
  
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Investing</h2>
      
      <p className="text-lg mb-8 text-gray-700">
        I occasionally angel invest in companies solving interesting problems. Here are some of the teams I&apos;ve backed:
      </p>
      
      <div className="space-y-6">
        {companies.map((company) => (
          <div key={company.name} className="border-l-4 border-gray-300 pl-4 hover:border-link-blue transition-colors">
            <a href={company.url} target="_blank" rel="noopener noreferrer" className="block group">
              <h3 className="text-xl font-semibold mb-1 group-hover:text-link-blue">
                {company.name}
              </h3>
              <p className="text-gray-600">
                {company.description}
              </p>
            </a>
          </div>
        ))}
      </div>
      
 
    </div>
  )
}
