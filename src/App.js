import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AddActions, RemoveActions } from './actions/MotoActions' 
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import motoIcono from './images/motoIcono.png';
import { CardMedia } from '@mui/material';

function App() {

  const [moto, setMoto] = useState('');
  const dispatch = useDispatch();
  const MotoSelector = useSelector((state) => state.Moto);
  const { motos } = MotoSelector;

  const handleSubmit = (e) => {
    e.preventDefault();
    moto !== '' && dispatch(AddActions(moto));
    document.getElementById("modeloMoto").value = "";
    setMoto('')
  };

  const handleRemove = (m) => {
    dispatch(RemoveActions(m));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Agrega una motocicleta a tu garage</h2>
      </header>
      <body>
        <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField 
              className='colors'
              id="modeloMoto" 
              label="Ingresa el modelo de moto" 
              variant="filled" 
              onChange={(e) => setMoto(e.target.value)}
            />
          </Grid>
          <Grid 
            item xs={4} 
            container 
            direction="row" 
            justifyContent="flex-end" 
            alignItems="center" >
            <Button 
              variant="contained"
              color="success"
              type='submit'
            >Agregar
            </Button>
          </Grid>
        </Grid>
        </form>

        <ul className='contenedorItems'>
          {
            motos && 
              motos.map((element) => (
              <li key={element.id} className='item'>
                <span className='itemLabel'>{element.moto.length > 15? element.moto.substr(0,12) + '...' : element.moto }</span>
                <CardMedia
                    sx={{ maxWidth: 50, maxHeight: 50 }}
                    component="img"
                    height="50"
                    className="background"
                    image={motoIcono}
                  />
                <Button 
                  variant="contained"
                  color="error"
                  onClick={() => handleRemove(element)}
                >Borrar
                </Button>
              </li>
            ))
          }
        </ul>
      </body>
    </div>
  );
}

export default App;
