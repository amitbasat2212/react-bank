from fastapi.responses import JSONResponse
def the_row_dosent_excit():
    return JSONResponse(
        status_code=404,
        content={"message":f"the transaction dosent excit"},
) 