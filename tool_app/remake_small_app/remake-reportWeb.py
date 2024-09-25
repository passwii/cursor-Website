# -*- coding: UTF-8 -*-
# !/root/anaconda3/bin/python

# Version Control by GitHub

import os
import shutil
from datetime import datetime
from pywebio import start_server
from pywebio import session
from pywebio import config
from pywebio.input import *
from pywebio.output import *
import pandas as pd


@config(title='Amazon Report', description='Report Automation for GMVPlus by XeonWii')
def main():
    report_data = input_group("亚马逊报表自动化 BLFv20240906",
                              [
                                  select('站点:', ['美国'], name='report_site', required=True),
                                  select('报表类型:', ['月报', '周报'], name='report_type', required=True),

                                  input("项目名称: ", placeholder="请输入项目名称（必填）", name='report_name',
                                        required=True,
                                        datalist=['LGJJ']),
                                  input('周期: ', placeholder="请输入报表周期:",
                                        name='report_date_count', required=True,
                                        datalist=['2023年度', '2024-W15', '2024-05']),
                                  input('周报范围',
                                        placeholder="周报（必填）例如：'2021.12.13-12.19'",
                                        name='report_date_range',
                                        datalist=['2024.06.10-06.16', '2024.06.17-06.23']),
                              ])

    current_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    reportFile = file_upload("亚马逊报表制作: ", placeholder="点击-上传AMZ csv", accept=".csv", required=True)
    reportSite = report_data['report_site']
    projectName = report_data['report_name']  # 项目名称
    reportDateCount = report_data['report_date_count']  # 周期
    reportDateRange = report_data['report_date_range']  # 日期范围
    reportType = report_data['report_type']  # 报表类型 —— 周报、月报、年度报表

    if reportType == '周报':
        reportName = f'{projectName} {reportSite} {reportDateRange}'
    else:
        reportName = f'{projectName} {reportSite} {reportDateCount}'

    # 自动适配所有运行环境 目录更新
    sourceFolder_Path = os.getcwd()
    os.chdir(sourceFolder_Path)

    # 写入项目文件到本地
    with open(f'{projectName} tmpReport.csv', 'wb') as csv_file:
        csv_file.write(reportFile['content'])

    if reportSite == '美国':
        n = 0
        TRS = pd.read_csv(f'{projectName} tmpReport.csv', thousands=',', skiprows=7, encoding='utf-8')
        TRS.fillna(0, inplace=True)

        TRS['quantity'] = TRS['quantity'].astype(int)

        # Order 订单销售额
        Order = TRS.loc[TRS['type'].isin(['Order'])]
        Liquidation = TRS.loc[TRS['type'].isin(['Liquidations'])]
        FBA_product_sales = round(Order['product sales'].sum(), 2)
        Liquidation_product_sales = round(Liquidation['product sales'].sum(), 2)
        Liquidation_processing_fee = round(Liquidation['other transaction fees'].sum(), 2)
        Shipping_credits = round(Order['shipping credits'].sum(), 2)
        Promotional_rebates = round(Order['promotional rebates'].sum(), 2)
        Gift_wrap_credits = round(Order['gift wrap credits'].sum(), 2)

        # FBA & FBM 平台费
        FBA_selling_fees = round(Order['selling fees'].sum(), 2)
        FBA_transaction_fees = round(Order['fba fees'].sum(), 2)
        # 销售SKU明细
        skuGroup = Order.groupby(['sku'], as_index=False).agg({'quantity': 'sum'})
        Order_QTY = int(Order['quantity'].sum())

        # Retrocharge 计算
        Order_Retrocharge = TRS.loc[TRS['type'].isin(['Order Retrocharge'])]
        Order_Retrocharge_Base_Tax = Order_Retrocharge.loc[
            Order_Retrocharge['description'].isin(['Base Tax'])]
        Order_Retrocharge_Base_Tax = round(Order_Retrocharge_Base_Tax['total'].sum(), 2)
        Order_Retrocharge_Shipping_Tax = round(
            Order_Retrocharge.loc[Order_Retrocharge['description'].isin(['Shipping Tax'])][
                'total'].sum(), 2)
        Order_Retrocharge_MarketplaceFacilitator = round(
            Order_Retrocharge.loc[
                Order_Retrocharge['description'].isin(['MarketplaceFacilitator'])][
                'total'].sum(),
            2)

        # Refund 计算
        Refund = TRS.loc[TRS['type'].isin(['Refund'])]
        Refund_other = round(Refund['other'].sum(), 2)
        FBA_product_sale_refunds = round(Refund['product sales'].sum(), 2)
        Shipping_credits_refunds = round(Refund['shipping credits'].sum(), 2)
        Promotional_rebates_refunds = round(Refund['promotional rebates'].sum(), 2)
        Gift_wrap_credits_refunds = round(Refund['gift wrap credits'].sum(), 2)

        FBA_selling_fees_refunds = round(Refund['selling fees'].sum(), 2)
        FBA_transaction_fees_refunds = round(Refund['fba fees'].sum(), 2)
        refund_skuGroup = Refund.groupby(['sku'], as_index=False).agg({'quantity': 'sum'})
        Refund_QTY = int(Refund['quantity'].sum())

        # Adjustment 赔偿等
        Adjustment = TRS.loc[TRS['type'].isin(['Adjustment'])]

        # Fee Adjustment 亚马逊 返还 的派送费(产品发货尺寸, 重新测量的费用)
        Fee_Adjustment = TRS.loc[TRS['type'].isin(['Fee Adjustment'])]
        Fee_Adjustment_FBA_Fee_Adjustment = round(
            Fee_Adjustment.loc[
                Fee_Adjustment['description'].isin(['FBA Weight/Dimension Change'])][
                'total'].sum(), 2)

        FBA_Inventory_Reimbursement = round(Adjustment['total'].sum(), 2)

        # Service Fee
        Service_Fee = TRS.loc[TRS['type'].isin(['Service Fee'])]
        Cost_of_Advertising_Selection = Service_Fee.loc[
            Service_Fee['description'].isin(['Cost of Advertising'])]
        Cost_of_Advertising = round(Cost_of_Advertising_Selection['total'].sum(), 2)
        Subscription = round(
            Service_Fee.loc[Service_Fee['description'].isin(['Subscription'])][
                'total'].sum(), 2)
        Subscription_Selection = Service_Fee.loc[
            Service_Fee['description'].isin(['Subscription'])]

        AGL_Selection = Service_Fee.loc[Service_Fee['description'].isin(
            ['FBA International Freight', 'FBA International Freight Duties and Taxes Charge'])]

        # LD 等费用
        LD = TRS.loc[TRS['type'].isin(['Deal Fee'])]
        Lightning_Deal_Fee = LD['total'].sum()

        # FBA Inventory Fee 库存费用
        FBA_Inventory_Fee = TRS.loc[TRS['type'].isin(['FBA Inventory Fee'])]
        All_Inventory_Fee = round(FBA_Inventory_Fee['total'].sum(), 2)

        # 销售额 = sales + 促销返点 + 赔偿 +所有税费和预扣
        Order_sales = round(FBA_product_sales + Shipping_credits + Promotional_rebates, 2)

        # 退款
        Refunds = round(
            FBA_product_sale_refunds + Shipping_credits_refunds + Promotional_rebates_refunds + Refund_other, 2)

        # 平台处理费
        AMZ = round(FBA_selling_fees, 2)
        FBA = round(FBA_transaction_fees, 2)
        AMZnFBA = round(AMZ + FBA, 2)
        AMZnFBA_Selection = TRS.loc[
            TRS['type'].isin(['Order', 'Refund'])]  # Order 亚马逊订单, 不计算退款

        # 平台推广费用
        spFee = Cost_of_Advertising
        spCount = format(abs(spFee) / Order_sales, '.2%')

        # AMZ店铺其他费用
        vineFee = Service_Fee.loc[Service_Fee['description'].isin(['Vine'])][
            'total'].sum()
        Coupon_Deal_selection = TRS.loc[
            TRS['type'].isin([0, 'Deal Fee', 'Service Fee']) & (
                ~TRS['description'].isin(['Cost of Advertising']))]
        Coupon = TRS.loc[TRS['type'].isin([0, 'Deal Fee', 'Service Fee']) & (
            ~TRS['description'].isin(['Cost of Advertising', 'Subscription']))]
        Subscription_fee = round(TRS.loc[TRS['type'].isin(['Service Fee']) & (
            TRS['description'].isin(['Subscription']))])
        Coupon_fee = round(Coupon['total'].sum(), 2)

        AMZ_store_other_fee = Coupon_fee + Subscription + Lightning_Deal_Fee + vineFee

        # AMZ 返还费用
        AMZ_return_fee = FBA_selling_fees_refunds + FBA_transaction_fees_refunds + Fee_Adjustment_FBA_Fee_Adjustment

        # 信用卡扣费
        AMZ_Card = round(TRS.loc[TRS['type'].isin(['Debt'])]['total'].sum(), 2)

        pt1 = skuGroup.sort_values(by='quantity', ascending=False, inplace=False)
        pt2 = refund_skuGroup.sort_values(by='quantity', ascending=False, inplace=False)

        if report_data['report_type'] == '周报':
            pt3 = pd.DataFrame(
                {'周数': reportDateCount,
                 '日期': reportDateRange,
                 '合计销量': Order_QTY,
                 '退款数量': Refund_QTY,
                 'SP广告占比': spCount,
                 '总销售额（1）': Order_sales,
                 '亚马逊退款（2）': abs(Refunds),
                 '亚马逊赔偿（3）': FBA_Inventory_Reimbursement,
                 '平台处理费(平台扣点+配送费）（4）': abs(AMZnFBA),
                 '仓储费（5）': abs(All_Inventory_Fee),
                 '平台推广费用（6）': abs(spFee),
                 '平台推广费用（信用卡扣款）': AMZ_Card,
                 'AMZ店铺其他费用（7）': abs(AMZ_store_other_fee),
                 'AMZ返还费用（8）': abs(AMZ_return_fee),
                 }, index=[0])
        else:
            pt3 = pd.DataFrame(
                {'合计销量': Order_QTY,
                 '退款数量': Refund_QTY,
                 'SP广告占比': spCount,
                 '总销售额（1）': Order_sales,
                 '亚马逊退款（2）': abs(Refunds),
                 '亚马逊赔偿（3）': FBA_Inventory_Reimbursement,
                 '平台处理费(平台扣点+配送费）（4）': abs(AMZnFBA),
                 '仓储费（5）': abs(All_Inventory_Fee),
                 '平台推广费用（6）': abs(spFee),
                 '平台推广费用（信用卡扣款）': AMZ_Card,
                 'AMZ店铺其他费用（7）': abs(AMZ_store_other_fee),
                 'AMZ返还费用（8）': abs(AMZ_return_fee),
                 '其他收入': Liquidation_product_sales,
                 '其他支出': abs(Liquidation_processing_fee),
                 }, index=[0])

        writer = pd.ExcelWriter(f'{projectName} Report.xlsx', engine='xlsxwriter')

        pt3.to_excel(writer, sheet_name='报表总览', index=False)
        Order.to_excel(writer, sheet_name='总销售额', index=False)
        pt1.to_excel(writer, sheet_name='销售明细', index=False)
        Refund.to_excel(writer, sheet_name='亚马逊退款', index=False)
        pt2.to_excel(writer, sheet_name='退货明细', index=False)
        Adjustment.to_excel(writer, sheet_name='亚马逊赔偿', index=False)
        AMZnFBA_Selection.to_excel(
            writer, sheet_name='平台处理费', index=False)
        # 仓储费+移除或弃置费
        FBA_Inventory_Fee.to_excel(
            writer, sheet_name='仓储费+移除或弃置费', index=False)
        AGL_Selection.to_excel(
            writer, sheet_name='亚马逊AGL物流', index=False)

        Cost_of_Advertising_Selection.to_excel(
            writer, sheet_name='亚马逊平台推广费用', index=False)
        # AMZ 店铺其他费用
        Subscription_Selection.to_excel(
            writer, sheet_name='AMZ店铺其他费用-订阅', index=False)
        Coupon_Deal_selection.to_excel(
            writer, sheet_name='AMZ店铺其他费用-优惠券&活动', index=False)
        # AMZ返还费用
        Refund.to_excel(writer, sheet_name='AMZ返还费用', index=False)

        TRS.to_excel(writer, sheet_name='交易一览', index=False)
        writer.close()

        ts.reset_style(f'{projectName} Report.xlsx')

        if report_data['report_type'] == '周报':
            os.rename(f'{projectName} Report.xlsx', f'Weekly Report {reportName}.xlsx')
            report_content = open(f'Weekly Report {reportName}.xlsx', 'rb').read()

            put_table([
                [span('报表统计概览', col=2)],
                ['周数 W#', reportDateCount],
                ['日期范围', reportDateRange],
                ['销售金额', Order_sales],
                ['退款金额', abs(Refunds)],
                ['当周销量', Order_QTY],
                ['SP广告占比', spCount],
                ['下载报表',
                 put_file(name=f'Weekly Report {reportName}.xlsx', content=report_content, label='点击下载报表')],
            ]).style('text-align: center')
            if not os.path.exists('./vreports'):
                os.makedirs('./vreports')
            shutil.copy(f'Weekly Report {reportName}.xlsx', './vreports')

        elif report_data['report_type'] == '月报':
            os.rename(f'{projectName} Report.xlsx', f'Monthly Report {reportName}.xlsx')
            report_content = open(f'Monthly Report {reportName}.xlsx', 'rb').read()

            put_table([
                [span('报表统计概览', col=2)],
                ['月度 M#', reportDateCount],
                ['销售金额', Order_sales],
                ['退款金额', abs(Refunds)],
                ['当月销量', Order_QTY],
                ['广告占比', spCount],
                ['下载报表',
                 put_file(name=f'Monthly Report {reportName}.xlsx', content=report_content, label='点击下载报表')],
            ]).style('text-align: center')

            if not os.path.exists('./vreports'):
                os.makedirs('./vreports')
            try:
                shutil.move(f'Monthly Report {reportName}.xlsx', './vreports')
            except:
                shutil.copy(f'Monthly Report {reportName}.xlsx', './vreports')
                os.remove(f'Monthly Report {reportName}.xlsx')

            if not os.path.exists('./tmpreport'):
                os.makedirs('./tmpreport')

            os.remove(f'{projectName} tmpReport.csv')

        # 输出项目报表log 到 Terminal
        print(f'------------>>> {projectName} {reportType} Report Done!')
        session.hold()  # Session.hold函数是保持会话打开所必需的。没有它，服务器在输入所有输出后将断开连接，文件将无法下载。


start_server(main, debug=True, host='0.0.0.0', port=8300, remote_access=False, auto_open_webbrowser=False, reconnect_timeout=60)
