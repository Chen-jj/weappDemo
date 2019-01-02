//index.js
Component({
  data: {
    propA: 0,
  },
  attached () {
    console.log('page attached')
  },
  methods: {
    onLoad () {
      console.log('page onLoad')
    },
    onUpdate() {
      this.setData({
        propA: ++this.data.propA,
      })
    }
  }
})
