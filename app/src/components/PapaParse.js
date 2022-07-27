import Papa from 'papaparse'

const PapaParse = {
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
        this.readCSV()
      },
      immediate: true
    },
  },
  created() {}
}

export default PapaParse
