import Popper from 'popper.js'
import Vue from 'vue'

export default {

	inserted: function (el, binding, vnode) {

		const modifiers = {
			placement: ['top', 'right', 'bottom', 'left'],
			trigger: ['hover', 'click']
		}

		const options = {
			trigger: 'hover',
			popper: {
				modifiers: {
					flip: {
						behavior: []
					}
				}
			}
		}
		

		Object.keys(binding.modifiers).forEach(function(item) {
			if ((modifiers.placement).includes(item)) {
				if (!options.popper.placement) 
					options.popper.placement = item

				options.popper.modifiers.flip.behavior.push(item)
				delete binding.modifiers[item]
			}

			if ((modifiers.trigger).includes(item)) {
				options.trigger = item
				delete binding.modifiers[item]
			}
		})

		let Component
		Object.keys(binding.modifiers).forEach(function(item) {
			if (Vue.component('inline-' + item)) {
				Component = Vue.component('inline-' + item)
			}
		});


		let popup;
		if (Component) {
			let InstanceComponent = new Component({
				propsData: {
					value: binding.value
				}
			})

			popup = InstanceComponent.$mount().$el
		}
		else {
			popup = document.createElement('div')

			if (typeof binding.value == 'string') popup.innerHTML = binding.value
			else if (typeof binding.value == 'function') popup.innerHTML = binding.value()
			else {
				popup.innerHTML = ''
			}
		}
		popup.classList.add('popper')
		popup.style.visibility = 'hidden'
		document.body.appendChild(popup)		


		new Popper(el, popup, options.popper);


		switch (options.trigger) {
			case 'hover':

				el.addEventListener('mouseover', () => {
					popup.style.visibility = 'visible'
				})

				el.addEventListener('mouseleave', () => {
					popup.style.visibility = 'hidden'
				})

				break;
			case 'click':

				el.addEventListener('click', () => {
					if (popup.style.visibility == 'hidden')
						popup.style.visibility = 'visible'
					else
						popup.style.visibility = 'hidden'
				})

				break;
		}	

	}
}