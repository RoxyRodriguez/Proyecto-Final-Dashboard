import React, {useEffect,useState} from 'react'
import SidebarRouter from '../dashboard/components/SidebarRouter'
import ToolbarRouter from '../dashboard/components/ToolbarRouter';
import { getPaciente } from "../../conexion/conexionPaciente";

const PacientesRouter = () => {

	const [dataPaciente, setDataPaciente] = useState([]);

	useEffect(() => {
		getPaciente().then((objPaciente)=>{
			setDataPaciente(objPaciente)
	  });
  
	}, [])

    return (
        <>
        <header className="app-header fixed-top">
        <ToolbarRouter />
        <SidebarRouter />
      </header>
    
    <div className="app-wrapper">	    
	    <div className="app-content pt-3 p-md-3 p-lg-4">
		    <div className="container-xl mt-5">
			    
			    <div className="row g-3 mt-5 mb-4 align-items-center justify-content-between">
				    <div className="col-auto">
			            <h1 className="app-page-title mb-0">Historial Pacientes</h1>
				    </div>
				    <div className="col-auto">
					     <div className="page-utilities">
						    <div className="row g-2 justify-content-start justify-content-md-end align-items-center">
							    <div className="col-auto">
								    <form className="table-search-form row gx-1 align-items-center">
					                    <div className="col-auto">
					                        <input type="text" id="search-orders" name="searchorders" className="form-control search-orders" placeholder="Buscar"/>
					                    </div>
					                    <div className="col-auto">
					                        <button type="submit" className="btn app-btn-secondary">Buscar</button>
					                    </div>
					                </form>					                
							    </div>							
							    <div className="col-auto">						    
								    <a className="btn app-btn-secondary" href="#"> <i className="fas fa-download"></i>
									   Descargar PDF
									</a>
							    </div>
						    </div>
					    </div>
				    </div>
			    </div>			   
				
				<div className="tab-content" id="orders-table-tab-content">
			        <div className="tab-pane fade show active" id="orders-all" role="tabpanel" aria-labelledby="orders-all-tab">
					    <div className="app-card app-card-orders-table shadow-sm mb-5">
						    <div className="app-card-body">
							    <div className="table-responsive">
							        <table className="table app-table-hover mb-0 text-left">
										<thead>
											<tr>
												<th className="cell">Código</th>
												<th className="cell">Apellidos</th>
												<th className="cell">Nombres</th>
												<th className="cell">Correo</th>
												<th className="cell">Celular</th>												
												<th className="cell">Historial</th>
											</tr>
										</thead>
										<tbody>
											{
												dataPaciente.map((objpac)=>{
													return (
														<tr>
															<td className="cell">{objpac.codigo}</td>
															<td className="cell"><span className="truncate">{objpac.apellidos}</span></td>
															<td className="cell">{objpac.nombres}</td>
															<td className="cell"><span>{objpac.email}</span></td>												
															<td className="cell">{objpac.celular}</td>
															<td className="cell"><a className="btn-sm app-btn-secondary" href="#">Ver</a></td>
														</tr>
													)
												})
											}
		
										</tbody>
									</table>
						        </div>
						       
						    </div>		
						</div>
						<nav className="app-pagination">
							<ul className="pagination justify-content-center">
								<li className="page-item disabled">
									<a className="page-link" href="#" tabindex="-1" aria-disabled="true">Anterior</a>
							    </li>
								<li className="page-item active"><a className="page-link" href="#">1</a></li>
								<li className="page-item"><a className="page-link" href="#">2</a></li>
								<li className="page-item"><a className="page-link" href="#">3</a></li>
								<li className="page-item">
								    <a className="page-link" href="#">Siguiente</a>
								</li>
							</ul>
						</nav>
						
			        </div>
			        
			        <div className="tab-pane fade" id="orders-paid" role="tabpanel" aria-labelledby="orders-paid-tab">
					    <div className="app-card app-card-orders-table mb-5">
						    <div className="app-card-body">
							    <div className="table-responsive">
								    
							        <table className="table mb-0 text-left">
										<thead>
											<tr>
												<th className="cell">Order</th>
												<th className="cell">Product</th>
												<th className="cell">Customer</th>
												<th className="cell">Date</th>
												<th className="cell">Status</th>
												<th className="cell">Total</th>
												<th className="cell"></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className="cell">#15346</td>
												<td className="cell"><span className="truncate">Lorem ipsum dolor sit amet eget volutpat erat</span></td>
												<td className="cell">John Sanders</td>
												<td className="cell"><span>17 Oct</span><span className="note">2:16 PM</span></td>
												<td className="cell"><span className="badge bg-success">Paid</span></td>
												<td className="cell">$259.35</td>
												<td className="cell"><a className="btn-sm app-btn-secondary" href="#">View</a></td>
											</tr>
											
											<tr>
												<td className="cell">#15344</td>
												<td className="cell"><span className="truncate">Pellentesque diam imperdiet</span></td>
												<td className="cell">Teresa Holland</td>
												<td className="cell"><span className="cell-data">16 Oct</span><span className="note">01:16 AM</span></td>
												<td className="cell"><span className="badge bg-success">Paid</span></td>
												<td className="cell">$123.00</td>
												<td className="cell"><a className="btn-sm app-btn-secondary" href="#">View</a></td>
											</tr>
											
											<tr>
												<td className="cell">#15343</td>
												<td className="cell"><span className="truncate">Vestibulum a accumsan lectus sed mollis ipsum</span></td>
												<td className="cell">Jayden Massey</td>
												<td className="cell"><span className="cell-data">15 Oct</span><span className="note">8:07 PM</span></td>
												<td className="cell"><span className="badge bg-success">Paid</span></td>
												<td className="cell">$199.00</td>
												<td className="cell"><a className="btn-sm app-btn-secondary" href="#">View</a></td>
											</tr>
										
											
											<tr>
												<td className="cell">#15341</td>
												<td className="cell"><span className="truncate">Morbi vulputate lacinia neque et sollicitudin</span></td>
												<td className="cell">Raymond Atkins</td>
												<td className="cell"><span className="cell-data">11 Oct</span><span className="note">11:18 AM</span></td>
												<td className="cell"><span className="badge bg-success">Paid</span></td>
												<td className="cell">$678.26</td>
												<td className="cell"><a className="btn-sm app-btn-secondary" href="#">View</a></td>
											</tr>
		
										</tbody>
									</table>
						        </div>
						    </div>		
						</div>
			        </div>
			        
			        <div className="tab-pane fade" id="orders-pending" role="tabpanel" aria-labelledby="orders-pending-tab">
					    <div className="app-card app-card-orders-table mb-5">
						    <div className="app-card-body">
							    <div className="table-responsive">
							        <table className="table mb-0 text-left">
										<thead>
											<tr>
												<th className="cell">Order</th>
												<th className="cell">Product</th>
												<th className="cell">Customer</th>
												<th className="cell">Date</th>
												<th className="cell">Status</th>
												<th className="cell">Total</th>
												<th className="cell"></th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className="cell">#15345</td>
												<td className="cell"><span className="truncate">Consectetur adipiscing elit</span></td>
												<td className="cell">Dylan Ambrose</td>
												<td className="cell"><span className="cell-data">16 Oct</span><span className="note">03:16 AM</span></td>
												<td className="cell"><span className="badge bg-warning">Pending</span></td>
												<td className="cell">$96.20</td>
												<td className="cell"><a className="btn-sm app-btn-secondary" href="#">View</a></td>
											</tr>
										</tbody>
									</table>
						        </div>
						    </div>		
						</div>
			        </div>
			        <div className="tab-pane fade" id="orders-cancelled" role="tabpanel" aria-labelledby="orders-cancelled-tab">
					    <div className="app-card app-card-orders-table mb-5">
						    <div className="app-card-body">
							    <div className="table-responsive">
							        <table className="table mb-0 text-left">
										<thead>
											<tr>
												<th className="cell">Order</th>
												<th className="cell">Product</th>
												<th className="cell">Customer</th>
												<th className="cell">Date</th>
												<th className="cell">Status</th>
												<th className="cell">Total</th>
												<th className="cell"></th>
											</tr>
										</thead>
										<tbody>
											
											<tr>
												<td className="cell">#15342</td>
												<td className="cell"><span className="truncate">Justo feugiat neque</span></td>
												<td className="cell">Reina Brooks</td>
												<td className="cell"><span className="cell-data">12 Oct</span><span className="note">04:23 PM</span></td>
												<td className="cell"><span className="badge bg-danger">Cancelled</span></td>
												<td className="cell">$59.00</td>
												<td className="cell"><a className="btn-sm app-btn-secondary" href="#">View</a></td>
											</tr>
											
										</tbody>
									</table>
						        </div>
						    </div>		
						</div>
			        </div>
				</div>
				
				
			    
		    </div>
	    </div>
	    
		<footer className="app-footer">
		    <div className="container text-center py-3">		        
            <small>Diseñado por:<a className="app-link" href="#" target="_blank"> SmartSoftwarePerú </a> </small>
		       
		    </div>
	    </footer>
	    
    </div>			

    
        </>
    )
}

export default PacientesRouter
