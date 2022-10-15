import React from 'react';

import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row'
import Grid from '../common/layout/grid';

function Summary({credit, debt}) {
  return (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
              <ValueBox
                cols='12 4'
                color='green'
                value={`R$ ${credit}`}
                text='Total de Créditos'
                icon='bank'
              />
              <ValueBox
                cols='12 4'
                color='red'
                value={`R$ ${debt}`}
                text='Total de Débitos'
                icon='credit-card'
              />
              <ValueBox
                cols='12 4'
                color='blue'
                value={`R$ ${credit - debt}`}
                text='Valor Consolidado'
                icon='money'
              />
            </Row>
        </fieldset>
    </Grid>
  );
}

export default Summary;