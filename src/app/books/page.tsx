export default function Books() {
  const books = [
    "Why Nations Fail",
    "The Power Broker",
    "The Singapore Story",
    "Principles",
    "Apple in China",
    "Atomic Habits",
    "Guns, Germs, and Steel",
    "Kissinger: A Biography",
    "The Great CEO Within",
    "Made In America",
    "The Name of The Wind",
    "The Three Body Problem"
  ]
  
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Books</h2>
      
      <p className="text-lg mb-6 text-gray-700">
        Some books that have shaped my thinking:
      </p>
      
      <ul className="space-y-2 text-lg">
        {books.map((book, index) => (
          <li key={index} className="ml-0">
            {book}
          </li>
        ))}
      </ul>
    </div>
  )
}
