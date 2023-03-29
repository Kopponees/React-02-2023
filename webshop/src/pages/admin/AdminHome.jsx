import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function AdminHome() {
  // t- tõlkimine, i18n - keelevahetus
  //[] - peab olema täpselt nii palju {}- meie valik, kui palju
  const { t } = useTranslation();

  return (
    <div className="center">
      <Button as={Link} to="/admin/maintain-shops" variant="secondary">{t("maintain-shops")}</Button>
      <Button as={Link} to="/admin/maintain-categories" variant="secondary">{t("maintain-categories")}</Button>
      <Button as={Link} to="/admin/add-product" variant="secondary">{t("add-product")}</Button>
      <Button as={Link} to="/admin/maintain-products" variant="secondary">{t("maintain-products")}</Button>
    </div>
  )
}

export default AdminHome