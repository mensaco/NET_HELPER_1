// copy text
window.copyText = function (textToCopy) {
    navigator.clipboard.writeText(textToCopy);
    document.body.removeChild(myTemporaryInputElement);
}


window.appObject = () => {
    return {
        input: Alpine.$persist(`
        public class ServeranforderungenDto : ServeranforderungAbgespeckt //, IHasID, IHasTimeStamps
        {
            //[Key]     //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
            //public int ID { get; set; }
        
        
            [MaxLength(255)]
            [EmailAddress(ErrorMessage = "Wenn angegeben, '{0}' muss eine gültige Email-Adresse enthalten")]
            [Display(Description = "Email-Adresse eingeben für Benachrichtigungen")]
            public string? Benachrichtigung { get; set; }
        
            //[MaxLength(255)]
            //[Display(Name = "Servername")]
            //public string? Titel { get; set; }
        
        
            [MaxLength()]
            [Display(Name = "Beschaffung")]
            public string? ANF_Beschaffung { get; set; }
        
            [MaxLength(255)]
            [Display(Name = "Beschaffung - Kommentar", Description = "Kommentar hier eintragen")]
            public string? ANF_BeschaffungComment { get; set; }
        
            [Display(Name = "Geplante Übergabe")]
            public DateTime? ANF_Übergabe { get; set; }
        
        
            //[MaxLength(255)]
            //[Display(Name = "Standort")]
            //public string? ANF_Standort { get; set; }
        
        
            //[MaxLength(255)]
            //[Display(Name = "Seriennummer")]
            //public string? ANF_SN { get; set; }
        
        
            [MaxLength(255)]
            [Display(Name = "Funktion")]
            public string? ANF_Funktion { get; set; }
        
        
            [MaxLength(255)]
            [Display(Name = "AppGroup")]
            public string? ANF_APPGROUP_SQL { get; set; }
        
        
            [MaxLength(255)]
            [Display(Name = "AppSystem")]
            public string? ANP_APPSYSTEM_SQL { get; set; }
        
        
            [MaxLength(255)]
            [Display(Name = "Betriebsstufe")]
            public string? ANF_Betriebsstufe { get; set; }
        
            [MaxLength(255)]
            [Display(Name = "NW-Funktionszone")]
            public string? ANF_NWFunktionszone { get; set; }
        
        
            [MaxLength(255)]
            [Display(Name = "Bereich")]
            public string? ANF_Bereich { get; set; }
        
            [MaxLength(255)]
            [Display(Name = "Produktivstatus")]
            public string? ANF_Einsatz { get; set; }
        
        
            [MaxLength(255)]
            [Display(Name = "B.-Verantwortung")]
            public string? ANF_Zuständigkeit { get; set; }
        
        
            [MaxLength(255)]
            [Display(Name = "Fachverantwortung")]
            public string? ANF_Fachverantwortung { get; set; }
        
        
            //[MaxLength(255)]
            //[Display(Name = "Domäne")]
            //public string? ANF_Domäne { get; set; }
        
        
        
            [MaxLength(255)]
            [Display(Name = "Betriebsystem")]
            public string? ANF_OS { get; set; }
        
        
            [Required]
            [Display(Name = "SAN Anschluss ?")]
            public bool ANF_SAN { get; set; }
        
        
            //[Required]
            //[Display(Name = "Backup ?")]
            //public bool ANF_Backup { get; set; }
        
        
            [MaxLength(255)]
            [Display(Name = "Patchcollection", Description = "Bitte auswählen!")]
            public string? ANF_Patchcollection { get; set; }
        
            [MaxLength(255)]
            [Display(Name = "Patchcollection Optional", Description = "Bitte auswählen!")]
            public string? ANF_Patchcollection2 { get; set; }
        
            [MaxLength(255)]
            [Display(Name = "Anti-Virus Ausschluss")]
            public string? ANF_AV { get; set; }
        
        
            [MaxLength(255)]
            [Display(Name = "Hardware auswählen")]
            public string? ANF_HW_TYP { get; set; }
        
        
        
            [MaxLength(255)]
            [Display(Name = "CPU")]
            public string? ANF_CPU { get; set; }
        
        
            [MaxLength(255)]
            [Display(Name = "RAM (GB)")]
            public string? ANF_RAM { get; set; }
        
            // Festplatten
        
            [MaxLength(255)]
            public string? ANF_VHD1 { get; set; }
        
            [MaxLength(255)]
            public string? ANF_VHD2 { get; set; }
        
            [MaxLength(255)]
            public string? ANF_VHD3 { get; set; }
        
            [MaxLength(255)]
            public string? ANF_VHD4 { get; set; }
        
        
            // Festplatten weiter
        
        
            [MaxLength(255)]
            public string? ANF_HD_C { get; set; }
        
            [MaxLength(255)]
            public string? ANF_HD_D { get; set; }
        
            [MaxLength(255)]
            public string? ANF_HD_D_Rep { get; set; }
        
            [MaxLength(255)]
            public string? ANF_HD_D_Typ { get; set; }
        
            [MaxLength(255)]
            public string? ANF_HD_E { get; set; }
        
            [MaxLength(255)]
            public string? ANF_HD_E_Rep { get; set; }
        
            [MaxLength(255)]
            public string? ANF_HD_E_Typ { get; set; }
        
            [MaxLength(255)]
            public string? ANF_HD_F { get; set; }
        
            [MaxLength(255)]
            public string? ANF_HD_F_Rep { get; set; }
        
            [MaxLength(255)]
            public string? ANF_HD_F_Typ { get; set; }
        
            // Festplatten Anzahl und Größen ???
        
        
            [MaxLength(255)]
            public string? ANF_HD1 { get; set; }
        
            [MaxLength(255)]
            public string? ANF_HD2 { get; set; }
        
            [MaxLength(255)]
            public string? ANF_HD3 { get; set; }
        
            [MaxLength(255)]
            public string? ANF_HD4 { get; set; }
        
            [MaxLength(255)]
            public string? ANF_HDCount1 { get; set; }
        
            [MaxLength(255)]
            public string? ANF_HDCount2 { get; set; }
        
            [MaxLength(255)]
            public string? ANF_HDCount3 { get; set; }
        
            [MaxLength(255)]
            public string? ANF_HDCount4 { get; set; }
        
        
            //[MaxLength(255)]
            //public string? Serverart { get; set; }
        
        
        
        
            [MaxLength(255)]
            public string? Admin { get; set; }
        
        
        
            [MaxLength(255)]
            public string? ANF_Backup_False { get; set; }
        
            [MaxLength(255)]
            [Display(Name = "Bemerkung")]
            public string? ANF_Bemerkung { get; set; }
        
        
        
        
            [MaxLength(255)]
            public string? ANF_Framework { get; set; }
        
        
        
        
            [MaxLength(255)]
            public string? ANF_HDHW1 { get; set; }
        
            [MaxLength(255)]
            public string? ANF_HDHW2 { get; set; }
        
            [MaxLength(255)]
            public string? ANF_HDHW3 { get; set; }
        
            [MaxLength(255)]
            public string? ANF_HDHW4 { get; set; }
        
            [MaxLength(255)]
            public string? ANF_HDRaid1 { get; set; }
        
            [MaxLength(255)]
            public string? ANF_HDRaid2 { get; set; }
        
            [MaxLength(255)]
            public string? ANF_HDRaid3 { get; set; }
        
            [MaxLength(255)]
            public string? ANF_HDRaid4 { get; set; }
        
            [MaxLength(255)]
            public string? ANF_HINWEIS { get; set; }
        
            [MaxLength(255)]
            public string? ANF_HW_Abweichung { get; set; }
        
        
            [MaxLength(255)]
            [Display(Name = "ILO - Adresse")]
            public string? ANF_ILO { get; set; }
        
            [MaxLength(255)]
        
            [Display(Name = "Bemerkung")]
            public string? ANF_NET_Bemerkung { get; set; }
        
            [MaxLength(255)]
            [ConditionalRequired(nameof(ANF_NW_Typ), ErrorMessage = "Wähle zuerst einen Typ.")]
            public string? ANF_NW_IP { get; set; }
        
            [MaxLength(255)]
            [ConditionalRequired(nameof(ANF_NW_Typ1), ErrorMessage = "Wähle zuerst einen Typ.")]
            public string? ANF_NW_IP1 { get; set; }
        
            [MaxLength(255)]
            [ConditionalRequired(nameof(ANF_NW_Typ2), ErrorMessage = "Wähle zuerst einen Typ.")]
            public string? ANF_NW_IP2 { get; set; }
        
            [MaxLength(255)]
            [ConditionalRequired(nameof(ANF_NW_Typ3), ErrorMessage = "Wähle zuerst einen Typ.")]
            public string? ANF_NW_IP3 { get; set; }
        
            [MaxLength(255)]
            public string? ANF_NW_Typ { get; set; }
        
            [MaxLength(255)]
            public string? ANF_NW_Typ1 { get; set; }
        
            [MaxLength(255)]
            public string? ANF_NW_Typ2 { get; set; }
        
            [MaxLength(255)]
            public string? ANF_NW_Typ3 { get; set; }
        
            [MaxLength(255)]
            [ConditionalRequired(nameof(ANF_NW_Typ), ErrorMessage = "Wähle zuerst einen Typ.")]
            public string? ANF_NW_VLAN { get; set; }
        
            [MaxLength(255)]
            [ConditionalRequired(nameof(ANF_NW_Typ1), ErrorMessage = "Wähle zuerst einen Typ.")]
            public string? ANF_NW_VLAN1 { get; set; }
        
            [MaxLength(255)]
            [ConditionalRequired(nameof(ANF_NW_Typ2), ErrorMessage = "Wähle zuerst einen Typ.")]
            public string? ANF_NW_VLAN2 { get; set; }
        
            [MaxLength(255)]
            [ConditionalRequired(nameof(ANF_NW_Typ3), ErrorMessage = "Wähle zuerst einen Typ.")]
            public string? ANF_NW_VLAN3 { get; set; }
        
            [Required]
            public bool ANF_NWcard { get; set; }
        
            [Required]
            public bool ANF_NWcard1 { get; set; }
        
            [Required]
            public bool ANF_NWcard2 { get; set; }
        
            [Required]
            public bool ANF_NWcard3 { get; set; }
        
            [MaxLength(255)]
            [ConditionalRequired(nameof(ANF_NW_Typ), ErrorMessage = "Wähle zuerst einen Typ.")]
            public string? ANF_NWFunktion { get; set; }
        
            [MaxLength(255)]
            [ConditionalRequired(nameof(ANF_NW_Typ1), ErrorMessage = "Wähle zuerst einen Typ.")]
            public string? ANF_NWFunktion2 { get; set; }
        
            [MaxLength(255)]
            [ConditionalRequired(nameof(ANF_NW_Typ2), ErrorMessage = "Wähle zuerst einen Typ.")]
            public string? ANF_NWFunktion3 { get; set; }
        
            [MaxLength(255)]
            [ConditionalRequired(nameof(ANF_NW_Typ3), ErrorMessage = "Wähle zuerst einen Typ.")]
            public string? ANF_NWFunktion4 { get; set; }
        
        
        
            [MaxLength(255)]
            public string? ANF_Plattenset { get; set; }
        
            [MaxLength(255)]
            public string? ANF_Projekt { get; set; }
        
            [MaxLength(255)]
            [Display(Name = "Projekt")]
            public string? ANF_Projekt2 { get; set; }
        
        
            [MaxLength(255)]
            public string? ANF_RZ_Prio { get; set; }
        
        
            [MaxLength(255)]
            public string? ANF_SAN_Beschaffung { get; set; }
        
            [MaxLength(255)]
            public string? ANF_SAN_False { get; set; }
        
            [MaxLength(255)]
            public string? ANF_SAN_Settings { get; set; }
        
            [MaxLength(255)]
            public string? ANF_SANcomment { get; set; }
        
            [MaxLength(255)]
            public string? ANF_SCHUTZ { get; set; }
        
            [MaxLength(255)]
            public string? ANF_WWPN { get; set; }
        
            [MaxLength(255)]
            [Display(Name = "Agent-Auswahl")]
            public string? BAC_Agent { get; set; }
        
            [MaxLength(255)]
            public string? BAC_Anlauf { get; set; }
        
            [MaxLength(255)]
            [Display(Name = "Datenhaltung")]
            public string? BAC_Datenhaltung { get; set; }
        
            [Required]
            [Display(Name = "Disaster Rec. im Projekt vorgesehen ?")]
            public bool BAC_DR { get; set; }
        
            [MaxLength(255)]
            public string? BAC_Pfad { get; set; }
        
            [MaxLength(255)]
            [Display(Name = "Sicherung")]
            public string? BAC_Sicherung { get; set; }
        
            [MaxLength(255)]
            [Display(Name = "Aufbewahrung")]
            public string? BAC_Time { get; set; }
        
            [MaxLength(255)]
            [Display(Name = "Sicherungszyklus")]
            public string? BAC_Zyklus { get; set; }
        
        
            [MaxLength(255)]
            public string? EMAIL { get; set; }
        
            [MaxLength(255)]
            public string? EMAIL_ABNAHME { get; set; }
        
            [MaxLength(255)]
            public string? EMAIL_Anfcheck { get; set; }
        
            [MaxLength(255)]
            public string? EMAIL_Anfcheck_SAN { get; set; }
        
            [MaxLength(255)]
            public string? EMAIL_ausgrauen { get; set; }
        
            [MaxLength(255)]
            public string? EMAIL_USER { get; set; }
        
            [MaxLength(255)]
            public string? EMAIL_USER_ausgrauen { get; set; }
        
            [MaxLength(255)]
            public string? Inhaltstyp { get; set; }
        
            [MaxLength(255)]
            [Display(Name = "Bereitstellung durch:")]
            public string? SRV_ADMIN { get; set; }
        
            [MaxLength(255)]
            [Display(Name = "ARS - ID")]
            public string? SRV_ARS { get; set; }
        
            [MaxLength]
            public string? SRV_PHY_Abnahme { get; set; }
        
            [Column("SRV_PHY_Backup_B")]
            [Display(Name = "Serviceauftrag für Backup erstellen")]
            public bool SRV_PHY_Backup { get; set; }
        
            [MaxLength]
            public string? SRV_PHY_Vorb { get; set; }
        
            [MaxLength(255)]
            public string? SRV_PHYS_HW { get; set; }
        
            [MaxLength]
            public string? SRV_V_Abnahme { get; set; }
        
            [Column("SRV_V_Backup_B")]
            [Display(Name = "Serviceauftrag für Backup erstellen")]
            public bool SRV_V_Backup { get; set; }
        
            [MaxLength]
            public string? SRV_V_SCVMM { get; set; }
        
            [MaxLength]
            public string? SRV_V_Vorb { get; set; }
        
            [MaxLength(255)]
            public string? STATUS { get; set; }
        
            [MaxLength(255)]
            public string? STATUS_Schutz { get; set; }
        
            //[MaxLength(255)]
            //public string? STATUSVIEW { get; set; }
        
            [MaxLength(255)]
            public string? UBG_Abnahme { get; set; }
        
            [MaxLength(255)]
            public string? UBG_Kunde { get; set; }
        
            //public DateTime? Erstellt { get; set; }
        
            //[MaxLength(255)]
            //[Column("Erstellt von")]
            //public string? ErstelltVon { get; set; }
        
            //public DateTime? Geändert { get; set; }
        
            //[MaxLength(255)]
            //[Column("Geändert von")]
            //public string? GeändertVon { get; set; }
        
        }

        
        
        `),
        stringDP: Alpine.$persist([]),
        stringEP: Alpine.$persist([]),     
        extracted:Alpine.$persist([]),
        //extractedPropertiesInfo:Alpine.$persist([]),
        parseCSharpProperty(input) {
            // Regular expression to match C# property attributes
            const regex = /\[\s*(\w+)\s*(?:\(\s*(.*?)\s*\))?\s*\]\s*public\s+(\w+)\??\s+(\w+)\s*{/g;


            // Extract matches from the input
            const matches = [...input.matchAll(regex)];

            if (matches.length === 0) {
                return null; // No valid matches found
            }

            var type, name, maxLength, dispName, dispDescription, mli;

            const regTypeName = /public \s*(.*?) \s*(.*?) \s*{/g
            const matchesTypeName = [...input.matchAll(regTypeName)];
            [, type, name] = matchesTypeName[0]



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
        get extractedPropertiesInfo(){
            return this.extracted.filter((p)=> p.incl == true)
        },
        extract(){
            this.extracted = this.extractedPropertiesInfoB
        },
        addDisplayPattern(){
            this.stringDP.push({
                "Pattern": "...",
                "ForTypes":"..."
            })
        },
        removeDisplayPattern(index){
            this.stringDP.splice(index, 1)
        },
        addEditPattern(){
            this.stringEP.push({
                "Pattern": "...",
                "ForTypes":"..."
            })
        },
        removeEditPattern(index){
            this.stringEP.splice(index, 1)
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
                    if(usePattern){
                        const snippet = usePattern.Pattern
                            .replace(/\{label\}/g, pi.label)
                            .replace(/\{name\}/g, pi.name)
                            l.push(snippet)
                    }

                })
            }
            return l
        },
        get razorEdit(){
            const l = []
            const propsinfos = this.extractedPropertiesInfo
            if (propsinfos) {
                propsinfos.forEach(pi => {
                    if (!pi.label) {
                        pi.label = pi.name
                    }
                    
                    var usePattern;
                    const usePatterns = this.stringEP.filter((el) => el.ForTypes.indexOf(pi.type) > -1)
                    
                    if(usePatterns && usePatterns.length > 1){
                        const condPatterns = usePatterns.filter((el) => el.ForTypes.indexOf(pi.type+'[')> -1)
                        for(var i = 0; i < condPatterns.length; i++){

                            const regexp = new RegExp(pi.type,"g")
                            const cpatterns = condPatterns[i].ForTypes.split(/ /)
                            
                            for (let j = 0; j < cpatterns.length; j++) {
                                const [type,condition,] = cpatterns[j].split(/[\[\]]/g);
                                if(pi.type == type){
                                    let body = "return pi." + condition
                                    let useThis = Function("pi", body)(pi)
                                    if(useThis){
                                        usePattern = condPatterns[i]                                         
                                    }
                                    else{
                                        usePattern = usePatterns.find((el) => el.ForTypes.indexOf(pi.type+'[') == -1)
                                    }
                                }
                                
                                 
                            }

                              
                        }

                    }
                    else if(usePatterns && usePatterns.length == 1) {
                        usePattern = usePatterns[0]
                        //debugger
                    }
                    
                    //usePattern = this.stringEP.find((el) => el.ForTypes.indexOf(pi.type) > -1)
                    if(usePattern){
                        const snippet = usePattern.Pattern
                            .replace(/\{label\}/g, pi.label)
                            .replace(/\{name\}/g, pi.name)
                            l.push(snippet)
                    }

                })
            }
            return l
        }


    }
}


