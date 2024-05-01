import Link from "next/link"

const CategoryLabel = ({category}: {category: String}) => {
  const colorKey = {
    'JavaScript': 'bg-yellow-600 hover:bg-yellow-700',
    'CSS': 'bg-blue-600 hover:bg-blue-700',
    'Python': 'bg-green-600 hover:bg-green-700',
    'PHP': 'bg-purple-600 hover:bg-purple-700',
    'Ruby': 'bg-red-600 hover:bg-red-700',
  }
  let color = category as keyof typeof colorKey;
  let bgColor = colorKey[color];
  return (
    <Link href={`/blog/categories/${category.toLowerCase()}`} className={`text-white
    rounded-lg p-2 ${bgColor}`}>
        {category}
    </Link>
  )
}

export default CategoryLabel