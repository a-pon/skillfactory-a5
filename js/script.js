const textBlock = document.getElementById('text-block');
let textData = [];

fetch('https://api.jsonbin.io/b/5f1759b5c1edc466175baf5f')
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		textData = data.text;

		const createText = () => {
			textBlock.innerHTML = "";

			textData.forEach(element => {
				textBlock.innerHTML += `<p>${element}</p>`;
			});
		}

		const replaceText = () => {
			textBlock.innerHTML = "";

			const input1 = document.querySelector('input[name="var1"]').value;
			const input2 = document.querySelector('input[name="var2"]').value;
			const input3 = document.querySelector('input[name="var3"]').value;
			const input4 = document.querySelector('input[name="var4"]').value;
			const input5 = document.querySelector('input[name="var5"]').value;
			const input6 = document.querySelector('input[name="var6"]').value;
			const input7 = document.querySelector('input[name="speach"]').value;

			for (let i = 0; i <= textData.length - 1; i++) {
				let newTextData = [];

				newTextData[i] = textData[i].replace("{var1}", `${input1}`);
				newTextData[i] = newTextData[i].replace("{var2}", `${input2}`);
				newTextData[i] = newTextData[i].replace("{var3}", `${input3}`);
				newTextData[i] = newTextData[i].replace("{var4}", `${input4}`);
				newTextData[i] = newTextData[i].replace("{var5}", `${input5}`);
				newTextData[i] = newTextData[i].replace("{var6}", `${input6}`);
				newTextData[i] = newTextData[i].replace("{speach}", `${input7}`);
				
				textBlock.innerHTML += `<p>${newTextData[i]}<p>`;
			}
		}

		const buttonCreate = document.getElementById('button-create');
		buttonCreate.addEventListener('click', createText);

		const buttonReplace = document.getElementById('button-replace');
		buttonReplace.addEventListener('click', replaceText);
	});