import Papa from 'papaparse'

const ParseCSV = {
  data: () => ({
    csv: [],
    file: null,
    errmessage: ""
  }),
  methods: {
    readCSV () {
      const _this = this
      Papa.parse(_this.file, {
        header: true,
        encoding: "utf-8",
        complete: function(results) {
          _this.csv = results?.data
        }
      });
    },
    resetApp() {
      const _this = this
      _this.errmessage = ""
    },
    resetError() {
      const _this = this
      _this.errmessage = ""
    }
  },
  watch: {
    file: {
      handler (file) {
        this.resetApp()
        if (!file) return
        if (file.type === (".csv" && "text/csv")) {
          this.readCSV()
        } else {
          this.errmessage = "Only CSV files are allowed"
        }
      },
      immediate: true
    },
  }
}

export default ParseCSV
