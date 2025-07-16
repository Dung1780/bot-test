const chalk = require('chalk');
function randomColor() {
	    var color = "";
		    for (var i = 0; i < 3; i++) {
				        var sub = Math.floor(Math.random() * 256).toString(16);
						        color += (sub.length == 1 ? "#FF9900" + sub : sub);
			} 
			   return "#" + color;
};
module.exports = (data, option) => {
		switch (option) {
					case "warn":
									console.log(chalk.bold.hex("#FF00FF").bold('» Lỗi « ') + data);
												break;
														case "error":
																	console.log(chalk.bold.hex("#FF0000").bold('» Lỗi « ') + data);
																				break;
																						default:
																										console.log(chalk.bold.hex(randomColor()).bold(`${option} » `) + data);
																													break;
		}
}

module.exports.loader = (data, option) => {
		switch (option) {
			    case "warn":
							console.log(chalk.bold.hex(randomColor()).bold("") + chalk.bold.hex("#00FF00").bold(data))
										break;
												case "error":
														console.log(chalk.bold.hex(randomColor()).bold("Tkien") + data);
																	break;
																	    default:
																					console.log(chalk.bold.hex(randomColor()).bold("Tkien") + chalk.bold.hex(randomColor()).bold(data));
																								break;
		}
}