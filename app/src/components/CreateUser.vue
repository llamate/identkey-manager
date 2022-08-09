<template>
	<div>
			<!-- RFID -->
			<b-form-group
					class="mb-3"
					label-cols="2"
					content-cols="10"
					label="RFID:"
					label-for="modal-rfid"
			>
				<b-form-input
					id="modal-rfid"
					v-model="employee.rfid"
				/>
			</b-form-group>

			<!-- KEY -->
			<b-form-group
					class="mb-3"
					label-cols="2"
					content-cols="10"
					label="Key:"
					label-for="modal-key"
			>
				<b-form-input
					id="modal-key"
					v-model="employee.key"
				/>
			</b-form-group>

			<!-- EMPLOYEE -->
			<b-form-group
					class="mb-3"
					label-cols="2"
					content-cols="10"
					label="Employee:"
					label-for="modal-employee"
			>
				<b-form-input
					id="modal-employee"
					v-model="employee.employee"
				/>
			</b-form-group>

			<b-button @click="saveCreatedUser()">Save</b-button>
	</div>

</template>

<script>
import ParseCSV from "@/components/ParseCSV";

export default {
	mixins: [ParseCSV],
	data: () => ({
		employee: {
			rfid: '',
			key: '',
			employee: ''
		}
	}),
	methods: {
		saveCreatedUser() {}
	}
}
</script>

<style>
</style>