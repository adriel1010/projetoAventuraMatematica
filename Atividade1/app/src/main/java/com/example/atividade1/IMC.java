package com.example.atividade1;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

public class IMC extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_i_m_c);
    }

    public void calcularImc(View view) {
        EditText peso = (EditText) findViewById(R.id.eTValor1);
        EditText altura = (EditText) findViewById(R.id.eTValor2);
        TextView tvResultado = (TextView) findViewById(R.id.tVImcResultado);

        Double pesoConvertido = Double.parseDouble(peso.getText().toString());
        Double altura2Convertido = Double.parseDouble(altura.getText().toString());

        Double resultado = pesoConvertido / (altura2Convertido * altura2Convertido);

        if (resultado < 19.1) {
            tvResultado.setText("Seu IMC é : " + resultado + ", Você está abaixo do peso ");
        } else if (resultado >= 19.1 && resultado <= 25.8) {
            tvResultado.setText("Seu IMC é : " + resultado + ", Você está no peso normal ");
        } else if (resultado >= 25.8 && resultado < 27.3) {
            tvResultado.setText("Seu IMC é : " + resultado + ", Você está marginalmente acima do peso ");
        } else if (resultado >= 27.3 && resultado < 32.3) {
            tvResultado.setText("Seu IMC é : " + resultado + ", Você está acima do peso ideal ");
        } else if (resultado >= 32.3) {
            tvResultado.setText("Seu IMC é : " + resultado + ", Você está Obeso ");
        }


    }

}
