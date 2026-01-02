declare module 'sslcommerz-lts' {
    export interface SSLCommerzInitData {
        total_amount: number | string;
        currency: string;
        tran_id: string;
        success_url: string;
        fail_url: string;
        cancel_url: string;
        ipn_url?: string;
        multi_card_name?: string;
        allowed_bin?: string;
        emi_option?: string;
        emi_max_inst_option?: string;
        emi_selected_inst?: string;
        cus_name: string;
        cus_email: string;
        cus_add1: string;
        cus_add2?: string;
        cus_city: string;
        cus_state?: string;
        cus_postcode: string | number;
        cus_country: string;
        cus_phone: string;
        cus_fax?: string;
        shipping_method: string;
        num_of_item?: number | string;
        ship_name?: string;
        ship_add1?: string;
        ship_add2?: string;
        ship_city?: string;
        ship_state?: string;
        ship_postcode?: string | number;
        ship_country?: string;
        product_name: string;
        product_category: string;
        product_profile: string;
        hours_till_departure?: string;
        flight_type?: string;
        pnr?: string;
        journey_from_to?: string;
        third_party_booking?: string;
        hotel_name?: string;
        length_of_stay?: string;
        check_in_time?: string;
        hotel_city?: string;
        product_type?: string;
        topup_number?: string;
        country_topup?: string;
        cart?: string;
        product_amount?: string;
        discount_amount?: string;
        convenience_fee?: string;
        value_a?: string;
        value_b?: string;
        value_c?: string;
        value_d?: string;
        [key: string]: any;
    }

    export interface SSLCommerzValidateData {
        val_id: string;
    }

    export interface SSLCommerzRefundData {
        refund_amount: number | string;
        refund_remarks: string;
        bank_tran_id: string;
        refe_id: string;
    }

    export interface SSLCommerzRefundQueryData {
        refund_ref_id: string;
    }

    export interface SSLCommerzTransQueryBySessionData {
        sessionkey: string;
    }

    export interface SSLCommerzTransQueryByTransData {
        tran_id: string;
    }

    export interface SSLCommerzApiResponse {
        status: string;
        failedreason: string;
        sessionkey: string;
        gw: { [key: string]: string };
        redirectGatewayURL: string;
        directPaymentURL: string;
        GatewayPageURL: string;
        storeBanner: string;
        storeLogo: string;
        desc: any[];
        is_direct_pay_enable: string;
        [key: string]: any;
    }

    export default class SSLCommerzPayment {
        constructor(store_id: string, store_passwd: string, live?: boolean);
        init(data: SSLCommerzInitData, url?: string | boolean, method?: string): Promise<SSLCommerzApiResponse>;
        validate(data: SSLCommerzValidateData, url?: string | boolean, method?: string): Promise<any>;
        initiateRefund(data: SSLCommerzRefundData, url?: string | boolean, method?: string): Promise<any>;
        refundQuery(data: SSLCommerzRefundQueryData, url?: string | boolean, method?: string): Promise<any>;
        transactionQueryBySessionId(data: SSLCommerzTransQueryBySessionData, url?: string | boolean, method?: string): Promise<any>;
        transactionQueryByTransactionId(data: SSLCommerzTransQueryByTransData, url?: string | boolean, method?: string): Promise<any>;
    }
}
