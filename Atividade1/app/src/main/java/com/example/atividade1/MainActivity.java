package com.example.atividade1;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void abrirIMC(View view) {
        Intent intent = new Intent(this, IMC.class);
        startActivity(intent);
    }

    public void abrirPrice(View view) {
        Intent intent = new Intent(this, Price.class);
        startActivity(intent);
    }


}
