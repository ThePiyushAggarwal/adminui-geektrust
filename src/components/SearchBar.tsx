import Input from "./Form/Input"

interface SearchBarProps {
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  return (
    <Input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search by name, email or role"
      className="w-full p-2 rounded-lg"
    />
  )
}

export default SearchBar
