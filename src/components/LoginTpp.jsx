import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { FormGroup } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { CardContent } from "@material-ui/core";

export default class LoginTpp extends Component {
    render() {
        return (
            <Card sx={{ minWidth: 310 }}>
                <CardContent>
                    
                    <FormGroup>
                    <h2>Banco I</h2>
                    <TextField id="agencia" label="Agencia" margin="normal" variant="outlined" />
                    <TextField id="conta"   label="Conta"   margin="normal" variant="outlined" />
                    <TextField id="senha"   label="Senha"   margin="normal" variant="outlined" type="password" />
                    
                    <Button style={{ width: '100%', margin: '8px'}} variant="contained" color="primary">
                        Entrar
                    </Button>
                    </FormGroup>
                    
                </CardContent>
                <CardActions>
              
                </CardActions>

               
         
                </Card>
       );
    }
        
}