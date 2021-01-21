----PREVENTING DUPLICATE REVIEWS----
Prevenir duplicar reviews de un mismo usuario a un mismo tour

La combinacion de user/tour siempre debe ser unico. Se puede conseguir con indexes.

Creamos un Compound Index en reviews:
	reviewSchema.index({ tour: 1, user: 1 }, { unique: true }); //Cada combinacion de tour y user siempre tiene que ser unica.
