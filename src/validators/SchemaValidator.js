import Joi from "joi";

const appointmentSchema = Joi.object({
	name: Joi.string().required(),
	birthDate: Joi.date().required(),
	date: Joi.date().required(),
	hour: Joi.number().integer().min(0).max(23).required(),
	status: Joi.string(),
	accomplished: Joi.boolean()
});

export default appointmentSchema;