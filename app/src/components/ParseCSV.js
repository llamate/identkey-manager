import Papa from 'papaparse'

const ParseCSV = {
  data: () => ({
    csv: [],
    file: null
  }),
  computed: {},
  methods: {
    readCSV () {
      const _this = this
      Papa.parse(this.file, {
        header: true,
        encoding: "utf-8",
        complete: function(results) {
          _this.csv = results?.data
        }
      });
    }
  },
  watch: {
    file: {
      handler (file) {
        if (!file) return
        console.log(this.csv)
        console.log(this.file)
        this.readCSV()
      },
      immediate: true
    },
  },
  created() {}
}

export default ParseCSV
