<script>
	export default {
		name: 'inline-product',
		render: function (createElement) {
			return createElement('div', 'Товар № ' + this.value)
		},
		props: {
			value: {
				required: true
			}
		}
	}
</script>