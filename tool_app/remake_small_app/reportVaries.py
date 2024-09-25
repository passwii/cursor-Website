# Global Words 全球字段
word_date_time = ['date/time',
                  'date/time',
                  'fecha/hora',
                  'date/time',
                  'date/heure',
                  'Datum/Uhrzeit',
                  'Data/Ora:',
                  'fecha y hora',
                  'datum/tijd',
                  '日付/時間'
                  ]
word_settlement_id = ['settlement id',
                      'settlement id',
                      'Id. de liquidación',
                      'settlement id',
                      'numéro de versement',
                      'Abrechnungsnummer',
                      'Numero pagamento',
                      'identificador de pago',
                      'schikkings-ID',
                      '決済番号',

                      ]
word_type = ['type',
             'type',
             'tipo ',
             'type',
             'type',
             'Typ',
             'Tipo',
             'tipo',
             'type',
             'トランザクションの種類',

             ]  # 需要单独验证一下墨西哥type是否有空格
'''type 字段'''
Debt_word = [
    'Debt',
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
]
Order_word = ['Order',
              1,
              2,
              'Order',
              'Commande',
              'Bestellung',
              'Ordine',
              'Pedido',
              8,
              '注文'
              ]
Liquidation_word = ['Liquidation']

Adjustment_word = ['Adjustment',
                   1,
                   2,
                   'Adjustment',
                   'Ajustement',
                   'Anpassung',
                   'Modifica',
                   'Ajuste',
                   8,
                   '調整'
                   ]
blank_word = [0]  # 后续都是用0计算, 不需要额外变动
FBA_Inventory_Fee_word = ['FBA Inventory Fee',
                          1,
                          2,
                          'FBA Inventory Fee',
                          'Frais de stock Expédié par Amazon',
                          'Versand durch Amazon Lagergebühr',
                          'Costo di stoccaggio Logistica di Amazon',
                          'Tarifas de inventario de Logística de Amazon',
                          8,
                          'FBA 在庫関連の手数料'
                          ]
Order_Retrocharge_word = ['Order_Retrocharge',
                          1,
                          2,
                          3,
                          4,
                          5,
                          'Order_Retrocharge',
                          7,
                          8,
                          ]
Refund_word = ['Refund',
               1,
               2,
               'Refund',
               'Remboursement',
               'Erstattung',
               'Rimborso',
               'Reembolso',
               8,
               '返金'
               ]
Refund_Retrocharge_word = ['Refund_Retrocharge',
                           1,
                           2,
                           3,
                           4,
                           5,
                           6,
                           7,
                           8,
                           ]
Service_Fee_word = ['Service Fee',
                    1,
                    2,
                    'Service Fee',
                    'Frais de service',
                    'Servicegebühr',
                    'Commissione di servizio',
                    'Tarifa de prestación de servicio',
                    8,
                    '注文外料金'
                    ]
Fee_Adjustment_word = ['Fee Adjustment',
                       1,
                       2,
                       'Fee Adjustment',
                       4,
                       5,
                       6,
                       7,
                       8,
                       ]
deal_fee_word = ['Deal Fee',
                 1,
                 2,
                 'Lightning Deal Fee',
                 'Tarif de la Vente Flash',
                 'Blitzangebotsgebühr',
                 'Tariffa dell’Offerta Lampo',
                 'Tarifa de Oferta flash',
                 8,
                 '数量限定タイムセール手数料'
                 ]
word_order_id = ['order id',
                 'order id',
                 'Id. del pedido',
                 'order id',
                 'numéro de la commande',
                 'Bestellnummer',
                 'Numero ordine',
                 'número de pedido',
                 'bestelnummer',
                 '注文番号'

                 ]
word_sku = ['sku', 'sku', 'sku', 'sku',
            'sku', 'SKU', 'SKU', 'sku', 'sku', 'SKU']
word_description = ['description',
                    'description',
                    'descripción',
                    'description',
                    'description',
                    'Beschreibung',
                    'Descrizione',
                    'descripción',
                    'beschrijving',
                    '説明'
                    ]
# Description 字段
Shipping_Tax_word = ['Shipping Tax']
Base_Tax_word = ['Base Tax']
MarketplaceFacilitator_word = ['MarketplaceFacilitator']
vine_world = ['Vine enrolment fee',
              1,
              2,
              'Vine enrolment fee',
              4,
              'Vine Anmeldegebühr',
              6,
              7,
              8,
              9
              ]

Cost_of_Advertising_word = ['Cost of Advertising',
                            1,
                            2,
                            'Cost of Advertising',
                            'Prix de la publicité',
                            'Werbekosten',
                            'Costo della pubblicità',
                            'Gastos de publicidad',
                            8,
                            '広告費用'
                            ]
Subscription_word = ['Subscription',
                     1,
                     2,
                     'Subscription',
                     4,
                     5,
                     6,
                     7,
                     8,
                     '月額登録料'
                     ]
FBA_Inventory_Reimbursement_Customer_Return_word = [
    'FBA Inventory Reimbursement - Customer Return']
AGL_freight_word = ['FBA International Freight Shipping Charge']
AGL_dutyandtax_word = ['FBA International Freight Duties and Taxes Charge']
Fee_Adjustment_Weight_Dimension_change_word = [
    'Fee Adjustment - Weight and Dimension Change',
    1,
    2,
    'Fee Adjustment - Weight and Dimension Change',
    4,
    5,
    6,
    7,
    8,
    9

]

word_quantity = ['quantity',
                 'quantity',
                 'cantidad',
                 'quantity',
                 'quantité',
                 'Menge',
                 'Quantità',
                 'cantidad',
                 'aantal',
                 '数量']
word_marketplace = ['marketplace',
                    'marketplace',
                    'marketplace',
                    'marketplace',
                    'Marketplace',
                    'Marketplace',
                    'Marketplace',
                    'web de Amazon',
                    'marketplace',
                    'Amazon 出品サービス'
                    ]
word_fulfillment = ['fulfillment',
                    'fulfillment',
                    'cumplimiento',
                    'fulfilment',
                    'traitement',
                    'Versand',
                    'Gestione',
                    'gestión logística',
                    'fulfillment',
                    'フルフィルメント'
                    ]
word_order_city = ['order city',
                   'order city',
                   'ciudad del pedido',
                   'order city',
                   'ville d\'où provient la commande',
                   'Ort der Bestellung',
                   'Città di provenienza dell\'ordine',
                   'ciudad de procedencia del pedido',
                   'bestelling stad',
                   '市町村'
                   ]
word_order_state = ['order state',
                    'order state',
                    'estado del pedido',
                    'order state',
                    'Région d\'où provient la commande',
                    'Bundesland',
                    'Provincia di provenienza dell\'ordine',
                    'comunidad autónoma de procedencia del pedido',
                    'status bestelling',
                    '都道府県'
                    ]
word_order_postal = ['order postal',
                     'order postal',
                     'código postal del pedido',
                     'order postal',
                     'code postal de la commande',
                     'Postleitzahl',
                     'CAP dell\'ordine',
                     'código postal de procedencia del pedido',
                     'bestelling per post',
                     '郵便番号'
                     ]
word_tax_collection_model = ['tax collection model',
                             'tax collection model',
                             'modelo de recaudación de impuestos',
                             'tax collection model',
                             'Modèle de perception des taxes',
                             'Steuererhebungsmodell',
                             'modello di riscossione delle imposte',
                             'Formulario de recaudación de impuestos',
                             8,
                             '税金徴収型'
                             ]  # 荷兰特殊字段
word_product_sales = ['product sales',
                      'product sales',
                      'ventas de productos',
                      'product sales',
                      'ventes de produits',
                      'Umsätze',
                      'Vendite',
                      'ventas de productos',
                      'verkoop van producten',
                      '商品売上'
                      ]
word_product_sales_tax = ['product sales tax',
                          'product sales tax',
                          'impuesto de ventas de productos',
                          'product sales tax',
                          'Taxes sur la vente des produits',
                          'Produktumsatzsteuer',
                          'imposta sulle vendite dei prodotti',
                          'impuesto de ventas de productos',
                          'geïnde omzetbelasting',
                          '商品の売上税'
                          ]
word_shipping_credits = ['shipping credits',
                         'shipping credits',
                         'créditos de envío',
                         'postage credits',
                         'crédits d\'expédition',
                         'Gutschrift für Versandkosten',
                         'Accrediti per le spedizioni',
                         'abonos de envío',
                         'Verzendtegoeden',
                         '配送料'
                         ]
word_shipping_credits_tax = ['shipping credits tax',
                             'shipping credits tax',
                             'impuesto de abono de envío',
                             'shipping credits tax',
                             'taxe sur les crédits d’expédition',
                             'Steuer auf Versandgutschrift',
                             'imposta accrediti per le spedizioni',
                             'impuestos por abonos de envío',
                             8,
                             '配送料の税金'
                             ]
word_gift_wrap_credits = ['gift wrap credits',
                          'gift wrap credits',
                          'créditos por envoltorio de regalo',
                          'gift wrap credits',
                          'crédits sur l\'emballage cadeau',
                          'Gutschrift für Geschenkverpackung',
                          'Accrediti per confezioni regalo',
                          'abonos de envoltorio para regalo',
                          'kredietpunten cadeauverpakking',
                          'ギフト包装手数料'
                          ]
word_giftwrap_credits_tax = ['giftwrap credits tax',
                             'giftwrap credits tax',
                             'impuesto de créditos de envoltura',
                             'giftwrap credits tax',
                             'Taxes sur les crédits cadeaux',
                             'Steuer auf Geschenkverpackungsgutschriften',
                             'imposta sui crediti confezione regalo',
                             'giftwrap credits tax',
                             8,
                             'ギフト包装クレジットの税金'
                             ]
word_amazon_point_fee = [0,
                         1,
                         2,
                         3,
                         4,
                         5,
                         6,
                         7,
                         8,
                         'Amazonポイントの費用'
                         ]
word_promotional_rebates = ['promotional rebates',
                            'promotional rebates',
                            'descuentos promocionales',
                            'promotional rebates',
                            'Rabais promotionnels',
                            'Rabatte aus Werbeaktionen',
                            'Sconti promozionali',
                            'devoluciones promocionales',
                            'promotiekortingen',
                            'プロモーション割引額'
                            ]
word_promotional_rebates_tax = ['promotional rebates tax',
                                'promotional rebates tax',
                                'impuesto de reembolsos promocionales',
                                'promotional rebates tax',
                                'Taxes sur les remises promotionnelles',
                                'Steuer auf Aktionsrabatte',
                                'imposta sugli sconti promozionali',
                                'promotional rebates tax',
                                8,
                                'プロモーション割引の税金'
                                ]
word_marketplace_withheld_tax = ['marketplace withheld tax',
                                 'marketplace withheld tax',
                                 'impuesto de retenciones en la plataforma',
                                 'marketplace withheld tax',
                                 'Taxes retenues sur le site de vente',
                                 'Einbehaltene Steuer auf Marketplace',
                                 'trattenuta IVA del marketplace',
                                 'impuesto retenido en el sitio web',
                                 'Belasting voor marketplace-facilitator',
                                 '源泉徴収税を伴うマーケットプレイス'
                                 ]
word_selling_fees = ['selling fees',
                     'selling fees',
                     'tarifas de venta',
                     'selling fees',
                     'frais de vente',
                     'Verkaufsgebühren',
                     'Commissioni di vendita',
                     'tarifas de venta',
                     'verkoopkosten',
                     '手数料'
                     ]
word_fba_fees = ['fba fees',
                 'fba fees',
                 'tarifas fba',
                 'fba fees',
                 'Frais Expédié par Amazon',
                 'Gebühren zu Versand durch Amazon',
                 'Costi del servizio Logistica di Amazon',
                 'tarifas de Logística de Amazon',
                 'fba-vergoedingen',
                 'FBA 手数料'
                 ]
word_other_transaction_fees = ['other transaction fees',
                               'other transaction fees',
                               'tarifas de otra transacción',
                               'other transaction fees',
                               'autres frais de transaction',
                               'Andere Transaktionsgebühren',
                               'Altri costi relativi alle transazioni',
                               'tarifas de otras transacciones',
                               'overige transactiekosten',
                               'トランザクションに関するその他の手数料'
                               ]
word_other = ['other',
              'other',
              'otro',
              'other',
              'autre',
              'Andere',
              'Altro',
              'otro',
              'overige',
              'その他'
              ]
word_total = ['total',
              'total',
              'total',
              'total',
              'total',
              'Gesamt',
              'totale',
              'total',
              'totaal',
              '合計'
              ]