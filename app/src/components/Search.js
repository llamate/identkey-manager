import PapaParse from "./PapaParse"

const Search = {
  mixins: [PapaParse],
  data: () => ({
    searchInput: null,
    foundEmployee: null
  }),

  computed: {},

  methods: {
    search() {
      if(!this.searchInput) return

      const searchParameter = this.filter()
      this.foundEmployee = this.csv
      .find((row) => {
        return String(row[searchParameter]).toLowerCase() === this.searchInput.toLowerCase()
      })
    },
    filter() {
      if(this.searchInput.length >= 4 && Number.isInteger(Number(this.searchInput))) return 'rfid'
      if(this.searchInput.length <= 3 && Number.isInteger(Number(this.searchInput))) return 'key'
      return 'employee'
    }
  }
}

export default Search
