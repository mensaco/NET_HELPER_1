// copy text
window.copyText = function (textToCopy) {
    navigator.clipboard.writeText(textToCopy);
}

window.online = async function(){
    const response = await fetch('/json/init.json')
    const settings = await response.json()
    setLocalStorageFromJson(JSON.stringify(settings))
    document.location = document.location.toString()
}

window.upload = function () {
    readFileFromDialog(function (fileContent) {
        if (fileContent) {
            setLocalStorageFromJson(fileContent);
        }
    })
}

window.download = function () {


    const filename = 'NET_HELPER_STATE_' + new Date().toISOString().slice(0,19).replace(/[-:]/g,'').replace(/T/,'_') + '.json'
    var text = JSON.stringify(window.getAllLocalStorageItems())


    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

window.getAllLocalStorageItems = function () {
    const items = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        items[key] = value;
    }
    return items;
}



window.readFileFromDialog = function (callback) {
    // Create an input element of type 'file'
    const inputElement = document.createElement('input');
    inputElement.type = 'file';

    // Set the 'accept' attribute to specify allowed file types
    inputElement.accept = '.json';

    // Add an event listener for when a file is selected
    inputElement.addEventListener('change', function (event) {
        const file = event.target.files[0]; // Get the selected file

        if (!file) {
            // No file selected, return early
            return;
        }

        const reader = new FileReader();

        reader.onload = function (e) {
            const fileContent = e.target.result; // Read the file content as a string
            callback(fileContent); // Call the provided callback with the file content
        };

        // Read the file as text
        reader.readAsText(file);
    });

    // Trigger a click event on the input element to open the file dialog
    inputElement.click();
}



window.setLocalStorageFromJson = function (jsonString) {
    try {
        const data = JSON.parse(jsonString);
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                localStorage.setItem(key, data[key]);
            }
        }
        return true; // Indicates success
    } catch (error) {
        console.error('Error parsing JSON or setting localStorage:', error);
        return false; // Indicates failure
    }
}








window.appObject = () => {
    return {
        input: Alpine.$persist(""),
        stringDP: Alpine.$persist([]),
        stringEP: Alpine.$persist([]),
        extraPattern1: Alpine.$persist([]),
        extraPattern2: Alpine.$persist([]),
        extraPattern3: Alpine.$persist([]),
        extraPattern4: Alpine.$persist([]),
        extracted: Alpine.$persist([]),
        // extracts property type and name, as well as MaxLength and Display attributes
        parseCSharpProperty(input) {
            
            var type, name, maxLength, dispName, dispDescription, mli;

            // extract type and name pf the property
            const regTypeName = /(public|protected|internal)(.*?)\s*{\s*get/g
            const matchesTypeName = [...input.matchAll(regTypeName)];
            if(!matchesTypeName[0]){
                return null;
            }
            var m0 = matchesTypeName[0][0]
            m0 = m0.replace(/(public|required|abstract|virtual|override|protected|friend|\{|get)/g, "")
                    .replace(/ {2,}/g,' ')
                    .trim();
            [type, name] = m0.split(' ')



            const regMaxLength = /\[MaxLength\((\d{0,})\)\]/g
            const matchesMaxLength = [...input.matchAll(regMaxLength)];
            if (matchesMaxLength && matchesMaxLength.length > 0) {
                maxLength = matchesMaxLength[0][1]
            }

            const regDispName = /\[Display\s*\(.*Name\s*=\s*"(.*?)".*\]/g
            const matchesDispName = [...input.matchAll(regDispName)];
            if (matchesDispName && matchesDispName.length > 0) {
                dispName = matchesDispName[0][1]

            }

            const regDispDescription = /\[Display\s*\(.*Description\s*=\s*"(.*?)".*\]/g
            const matchesDispDescription = [...input.matchAll(regDispDescription)];
            if (matchesDispDescription && matchesDispDescription.length > 0) {
                dispDescription = matchesDispDescription[0][1]

            }


            if (maxLength == "") {
                mli = 4000;
            }
            else if (maxLength) {
                mli = parseInt(maxLength)
            }

            // Create the resulting JavaScript object
            const result = {
                name: name,
                type: type,
                length: mli,
                label: dispName,
                desc: dispDescription,
                incl: true
            };

            return result;
        },
        get extractedPropertiesInfoB() {
            var l = []
            const props = [...this.input.split(/\{\s*get\s*;\s*set\s*;\s*}/)]

            props.forEach(prop => {
                const pp = this.parseCSharpProperty(prop + ` { get; set; } `)
                if (pp) {
                    l.push(pp)
                }

            })

            return l
        },
        get extractedPropertiesInfo() {
            return this.extracted.filter((p) => p.incl == true)
        },
        extract() {
            this.extracted = this.extractedPropertiesInfoB
        },
        addDisplayPattern() {
            this.stringDP.push({
                "Pattern": "...",
                "ForTypes": "..."
            })
        },
        removeDisplayPattern(index) {
            this.stringDP.splice(index, 1)
        },
        addEditPattern() {
            this.stringEP.push({
                "Pattern": "...",
                "ForTypes": "..."
            })
        },
        removeEditPattern(index) {
            this.stringEP.splice(index, 1)
        },
        addExtraPattern1() {
            this.extraPattern1.push({
                "Pattern": "...",
                "ForTypes": "..."
            })
        },
        removeExtraPattern1(index) {
            this.extraPattern1.splice(index, 1)
        },
        addExtraPattern2() {
            this.extraPattern2.push({
                "Pattern": "...",
                "ForTypes": "..."
            })
        },
        removeExtraPattern2(index) {
            this.extraPattern2.splice(index, 1)
        },
        addExtraPattern3() {
            this.extraPattern3.push({
                "Pattern": "...",
                "ForTypes": "..."
            })
        },
        removeExtraPattern3(index) {
            this.extraPattern3.splice(index, 1)
        },
        addExtraPattern4() {
            this.extraPattern4.push({
                "Pattern": "...",
                "ForTypes": "..."
            })
        },
        removeExtraPattern4(index) {
            this.extraPattern4.splice(index, 1)
        },
        get razorDisplay() {
            const l = []
            const propsinfos = this.extractedPropertiesInfo
            if (propsinfos) {
                propsinfos.forEach(pi => {
                    if (!pi.label) {
                        pi.label = pi.name
                    }
                    const usePattern = this.stringDP.find((el) => el.ForTypes.indexOf(pi.type) > -1)
                    if (usePattern) {
                        const snippet = usePattern.Pattern
                            .replace(/\{label\}/g, pi.label)
                            .replace(/\{name\}/g, pi.name)
                        l.push(snippet)
                    }

                })
            }
            return l
        },
        get razorEdit() {
            const l = []
            const propsinfos = this.extractedPropertiesInfo
            if (propsinfos) {
                propsinfos.forEach(pi => {
                    if (!pi.label) {
                        pi.label = pi.name
                    }

                    var usePattern;
                    const usePatterns = this.stringEP.filter((el) => el.ForTypes.indexOf(pi.type) > -1)

                    if (usePatterns && usePatterns.length > 1) {
                        const condPatterns = usePatterns.filter((el) => el.ForTypes.indexOf(pi.type + '[') > -1)
                        for (var i = 0; i < condPatterns.length; i++) {

                            const regexp = new RegExp(pi.type, "g")
                            const cpatterns = condPatterns[i].ForTypes.split(/ /)

                            for (let j = 0; j < cpatterns.length; j++) {
                                const [type, condition,] = cpatterns[j].split(/[\[\]]/g);
                                if (pi.type == type) {
                                    let body = "return pi." + condition
                                    let useThis = Function("pi", body)(pi)
                                    if (useThis) {
                                        usePattern = condPatterns[i]
                                    }
                                    else {
                                        usePattern = usePatterns.find((el) => el.ForTypes.indexOf(pi.type + '[') == -1)
                                    }
                                }


                            }


                        }

                    }
                    else if (usePatterns && usePatterns.length == 1) {
                        usePattern = usePatterns[0]
                        //debugger
                    }

                    //usePattern = this.stringEP.find((el) => el.ForTypes.indexOf(pi.type) > -1)
                    if (usePattern) {
                        const snippet = usePattern.Pattern
                            .replace(/\{label\}/g, pi.label)
                            .replace(/\{name\}/g, pi.name)
                        l.push(snippet)
                    }

                })
            }
            return l
        },
        get ExtraPattern1() {
            const l = []
            const propsinfos = this.extractedPropertiesInfo
            if (propsinfos) {
                propsinfos.forEach(pi => {
                    if (!pi.label) {
                        pi.label = pi.name
                    }
                    const usePattern = this.extraPattern1.find((el) => el.ForTypes.indexOf(pi.type) > -1)
                    if (usePattern) {
                        const snippet = usePattern.Pattern
                            .replace(/\{label\}/g, pi.label)
                            .replace(/\{name\}/g, pi.name)
                            .replace(/\{type\}/g, pi.type)
                        l.push(snippet)
                    }

                })
            }
            return l
        },
        get ExtraPattern2() {
            const l = []
            const propsinfos = this.extractedPropertiesInfo
            if (propsinfos) {
                propsinfos.forEach(pi => {
                    if (!pi.label) {
                        pi.label = pi.name
                    }
                    const usePattern = this.extraPattern2.find((el) => el.ForTypes.indexOf(pi.type) > -1)
                    if (usePattern) {
                        const snippet = usePattern.Pattern
                            .replace(/\{label\}/g, pi.label)
                            .replace(/\{name\}/g, pi.name)
                            .replace(/\{type\}/g, pi.type)
                        l.push(snippet)
                    }

                })
            }
            return l
        },
        get ExtraPattern3() {
            const l = []
            const propsinfos = this.extractedPropertiesInfo
            if (propsinfos) {
                propsinfos.forEach(pi => {
                    if (!pi.label) {
                        pi.label = pi.name
                    }
                    const usePattern = this.extraPattern3.find((el) => el.ForTypes.indexOf(pi.type) > -1)
                    if (usePattern) {
                        const snippet = usePattern.Pattern
                            .replace(/\{label\}/g, pi.label)
                            .replace(/\{name\}/g, pi.name)
                            .replace(/\{type\}/g, pi.type)
                        l.push(snippet)
                    }
        
                })
            }
            return l
        },
        get ExtraPattern4() {
            const l = []
            const propsinfos = this.extractedPropertiesInfo
            if (propsinfos) {
                propsinfos.forEach(pi => {
                    if (!pi.label) {
                        pi.label = pi.name
                    }
                    const usePattern = this.extraPattern4.find((el) => el.ForTypes.indexOf(pi.type) > -1)
                    if (usePattern) {
                        const snippet = usePattern.Pattern
                            .replace(/\{label\}/g, pi.label)
                            .replace(/\{name\}/g, pi.name)
                            .replace(/\{type\}/g, pi.type)
                        l.push(snippet)
                    }
        
                })
            }
            return l
        }


    }
}


[...document.querySelectorAll("button")].forEach($el => {
    $el.addEventListener("click", e => e.stopPropagation());
});