----------------STREAMS------------------


Uses to process (read and write) data piece by piece (chunks) without completing the whole read or write operation, and therefor without keeping all data in memory


4 Types of STREAMS:
					- Readable: consume data. E.g. fs read stream.
					Important events: data , end
					Important functions: pipe(), read()
					- Writable: write data. E.g. fs write streams
					Important events: drain, finish
					Important functions: write(), end()
					- Duplex: Streams that are Readable and wirtable. E.g. net web socket
					- Transform: are duplex that transform data as is written or read. E.g. zlib gzip creation

Node implementa los stream mencionados -> Podemos consumirlos y usarlos con eventos y funciones disponebles para cada tipo de streams
Tambien podemos crear nuestros propios streams y consumirlos usando los mismos eventos y funciones

Backpressure: when the response can not send the data nearly as fast as it is receiving it from the file -> Possible solution: pipe operator -> Allows to pipe the output of readable stream right into the the imput of a writable stream. Automatically handle the speed of the data coming in, and the speed of the data going out.

E.g.:
	const readable = fs.createReadableStream('file.txt');

	readable.pipe(res);

	Entonces para aclarar: a una fuente readable le aplico el metodo pipe con destino a una writable.

