from flask import Blueprint, render_template, json

dashboard = Blueprint('dashboard', __name__,
                      static_folder='static',
                      template_folder='templates',
                      static_url_path='/dashboard/static')


@dashboard.route('/')
def index():
    data = [1240.50, 2348.90, 1987.55, 3452.34, 2341.67, 3442.56, 2139.00]
    return render_template('dashboard.html', type='Dashboard', data=data, total=f'R$ {sum(data)}')


@dashboard.route('/vendas')
def vendas():
    return render_template('vendas.html', type='Registrar venda')


@dashboard.route('/suporte')
def suporte():
    return render_template('suporte.html', type='Suporte')

@dashboard.route('/produtos')
def produtos():
    return render_template('produtos.html', type='Gerenciamento de Produtos do sistema')


@dashboard.route('/usuarios')
def usuarios():
    return render_template('usuario.html', type='Gerenciamento de usuários do sistema')