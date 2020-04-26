package com.example.calculadora;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }


    public void somar(View view) {
        EditText campo1 = (EditText) findViewById(R.id.eTvalor1);
        EditText campo2 = (EditText) findViewById(R.id.eTvalor2);

        TextView tvResultado = (TextView) findViewById(R.id.tVResultado);


        Double valor1 =  Double.parseDouble(campo1.getText().toString());
        Double valor2 =  Double.parseDouble(campo2.getText().toString());

        Double resultado = valor1 + valor2;

        Toast.makeText(this, "Resultado da soma: " + resultado, Toast.LENGTH_LONG).show();
        tvResultado.setText("Total: " + resultado);
    }
}
