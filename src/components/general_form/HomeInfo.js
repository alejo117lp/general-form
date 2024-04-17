import React from "react";
import LabelOneField from "../general_components/LabelOneField";
import LabelTwoFields from "../general_components/LabelTwoFields";
import LabelOneSelect from "../general_components/LabelOneSelect";

function HomeInformation( {nameBox, userData } ){
    return (
        <div className="form-box">
            <h3>{nameBox}</h3>
            <LabelOneField 
                labelText={"Dirección de residencia:"}
                inputId={"home_address"}
                inputPlaceholder={"Dirección de residencia"}
                inputType={"text"}
                required={true}
                minLength={5}
                defaultValue={userData?.home_address}
            />

            <div className="two-field-container">
                <LabelOneField
                    labelText={"Barrio:"}
                    inputId={"home_neighborhood"}
                    inputPlaceholder={"Nombre Barrio"}
                    inputType={"text"}
                    required={true}
                    minLength={2}
                    defaultValue={userData?.home_neighborhood}
                />

                <LabelOneSelect 
                    labelText={"Municipio:"} 
                    selectText={"Seleccione municipio de residencia"}
                    selectId={'home_city'}
                    defaultValue={userData?.home_city}
                    initialOptions={['MEDELLÍN', 'ABEJORRAL', 'ABRIAQUÍ', 'ACHÍ', 'ALEJANDRÍA', 'ALTOS DEL ROSARIO', 'AMAGÁ', 
                    'AMALFI', 'ANDES', 'ANGELÓPOLIS', 'ANGOSTURA', 'ANORÍ', 'ANZA', 'APARTADÓ', 'ARBOLETES', 'ARGELIA', 'ARMENIA', 
                    'ARROYOHONDO', 'BARANOA', 'BARBOSA', 'BARRANCO DE LOBA', 'BARRANQUILLA', 'BELLO', 'BELMIRA', 'BETANIA', 'BETULIA', 
                    'BOAVITA', 'BOGOTÁ', 'BRICEÑO', 'BURITICÁ', 'CÁCERES', 'CAICEDO', 'CALAMAR', 'CALDAS', 'CAMPAMENTO', 'CANTAGALLO', 
                    'CAÑASGORDAS', 'CARACOLÍ', 'CARAMANTA', 'CAREPA', 'CARTAGENA', 'CAUCASIA', 'CERINZA', 'CHIGORODÓ', 'CHINAVITA', 'CHISCAS', 
                    'CHITA', 'CHITARAQUE', 'CHIVATÁ', 'CICUCO', 'CISNEROS', 'CIUDAD BOLÍVAR', 'CLEMENCIA', 'COCORNÁ', 'CONCEPCIÓN', 'CONCORDIA', 
                    'COPER', 'COPACABANA', 'CORRALES', 'COVARACHÍA', 'CUBARÁ', 'CUCAITA', 'CUÍTIVA', 'DABEIBA', 'DON MATÍAS', 'DUITAMA',
                     'EBÉJICO', 'EL BAGRE', 'EL CARMEN DE BOLÍVAR', 'EL CARMEN DE VIBORAL', 'EL COCUY', 'EL ESPINO', 'EL GUAMO', 'EL PEÑÓN',
                      'ENTRERRIOS', 'ENVIGADO', 'FIRAVITOBA', 'FLORESTA', 'FREDONIA', 'FRONTINO', 'GACHANTIVÁ', 'GAMEZA', 'GARAGOA', 'GIRALDO', 
                      'GIRARDOTA', 'GÓMEZ PLATA', 'GRANADA', 'GUACAMAYAS', 'GUADALUPE', 'GUARNE', 'GUATAPE', 'GUATEQUE', 'GUAYATÁ', 'GÜICÁN', 
                      'HATILLO DE LOBA', 'HELICONIA', 'HISPANIA', 'ITAGUI', 'ITUANGO', 'IZA', 'JARDÍN', 'JENESANO', 'JERICÓ', 'LA CAPILLA', 
                      'LA CEJA', 'LA ESTRELLA', 'LA PINTADA', 'LA UVITA', 'LA VICTORIA', 'LABRANZAGRANDE', 'LIBORINA', 'MACEO', 'MAGANGUÉ', 
                      'MAHATES', 'MARINILLA', 'MARGARITA', 'MARÍA LA BAJA', 'MONTEBELLO', 'MONTECRISTO', 'MOMPÓS', 'MORALES', 'MURINDÓ', 
                      'MUTATÁ', 'NARIÑO', 'NECHÍ', 'NECOCLÍ', 'OLAYA', 'PEÑOL', 'PEQUE', 'PUEBLORRICO', 'PUERTO BERRÍO', 'PUERTO COLOMBIA', 
                      'PUERTO NARE', 'PUERTO TRIUNFO', 'REGIDOR', 'REMEDIOS', 'RETIRO', 'RIONEGRO', 'RÍO VIEJO', 'SABANALARGA', 'SABANETA', 
                      'SALGAR', 'SAN ANDRÉS DE CUERQUÍA', 'SAN CARLOS', 'SAN CRISTÓBAL', 'SAN ESTANISLAO', 'SAN FERNANDO', 'SAN FRANCISCO', 
                      'SAN JACINTO', 'SAN JACINTO DEL CAUCA', 'SAN JERÓNIMO', 'SAN JOSÉ DE LA MONTAÑA', 'SAN JUAN DE URABÁ', 'SAN JUAN NEPOMUCENO', 
                      'SAN LUIS', 'SAN MARTÍN DE LOBA', 'SAN PABLO', 'SAN PEDRO', 'SAN PEDRO DE URABA', 'SAN RAFAEL', 'SAN ROQUE', 'SAN VICENTE', 
                      'SANTA BÁRBARA', 'SANTA CATALINA', 'SANTA ROSA', 'SANTA ROSA DE OSOS', 'SANTAFÉ DE ANTIOQUIA', 'SANTO DOMINGO', 'SEGOVIA', 
                      'SIMITÍ', 'SOPLAVIENTO', 'SONSON', 'SOPETRÁN', 'TALAIGUA NUEVO', 'TÁMESIS', 'TARAZÁ', 'TARSO', 'TIBIRIBÍ', 'TIQUISIO', 
                      'TOLEDO', 'TUNJA', 'TURBACO', 'TURBANÁ', 'TURBO', 'URAMITA', 'URRAO', 'VALDIVIA', 'VALPARAÍSO', 'VEGACHÍ', 'VENECIA', 
                      'VIGÍA DEL FUERTE', 'VILLANUEVA', 'YALÍ', 'YARUMAL', 'YOLOMBÓ', 'YONDÓ', 'ZAMBRANO', 'ZARAGOZA']}
                    required={true}
                />
            </div>

            <LabelTwoFields 
                labelText={"Teléfono 1:"}
                inputId={"telephone1"}
                inputPlaceholder={"Teléfono 1"}
                inputType={"number"}
                minLength={7}
                defaultValue={userData?.telephone1}

                labelText2={"Celular:"}
                inputId2={"cellphone"}
                inputPlaceholder2={"Celular"}
                inputType2={"number"}
                required2={true}
                minLength2={10}
                maxLength2={12}
                defaultValue2={userData?.cellphone}
            />

            <LabelOneField 
                labelText={"Correo Electrónico Personal:"}
                inputId={"email"}
                inputPlaceholder={"Correo Electrónico Personal"}
                inputType={"email"}
                required={true}
                defaultValue={userData?.email}
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            />
        </div>
    );
}

export default HomeInformation;